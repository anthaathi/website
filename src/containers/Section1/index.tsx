import {AppBar} from '@/components/AppBar';
import {HeadingLarge, LabelMedium, LabelSmall} from 'baseui/typography';
import * as React from 'react';
import {useEffect, useRef, useState} from 'react';
import {useStyletron} from 'baseui';
import {FullPageWithColor} from '@/components/FullPageWithColor';

export function Section1() {
  const [css, $theme] = useStyletron();

  const ref = useRef<HTMLDivElement[]>([]);

  const timeout = useRef(null);
  const [isMoving, setIsMoving] = useState(true);

  const [isSelected, setIsSelected] = useState(0);

  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }

    function onScroll() {
      setIsMoving(document.documentElement.scrollTop < 96);
    }

    document.addEventListener('scroll', onScroll);

    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    if (!isMoving) {
      return;
    }

    timeout.current = setTimeout(() => {
      setIsSelected((prev) => {
        if (prev + 1 === ref.current.length) {
          return 0;
        }

        return prev + 1;
      });
    }, 3000);
  }, [isSelected, isMoving]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return null;
    }

    ref.current[isSelected].scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'nearest',
    });
  }, [isSelected]);

  return (
    <FullPageWithColor>
      <div
        className={css({
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          zIndex: 1,
        })}
      >
        <video
          loop={true}
          autoPlay
          className={css({width: '100%', height: '100%', objectFit: 'cover'})}
        >
          <source src="/Particle - 5187.mp4" type="video/mp4" />
          <source src="/Particle - 5187.webm" type="video/webm" />
        </video>
      </div>

      <AppBar />

      <div
        className={css({
          position: 'relative',
          zIndex: 3,
          flexGrow: 1,
          display: 'flex',
        })}
      >
        <div
          className={css({
            position: 'absolute',
            bottom: '4rem',
            left: '1rem',
            right: 0,
          })}
        >
          <div
            className={css({
              display: 'flex',
              maxWidth: '1200px',
              margin: '0 auto',
              alignItems: 'center',
            })}
          >
            {PageItemList.map((res, index) => {
              return (
                <React.Fragment key={index}>
                  <LabelSmall
                    $style={{letterSpacing: '-0.32px', cursor: 'pointer'}}
                    onClick={() => {
                      setIsSelected(index);
                    }}
                  >
                    {(index + 1).toString().padStart(2, '0')}
                  </LabelSmall>

                  <div
                    className={css({
                      display: 'block',
                      padding: '1px',
                      marginLeft: '12px',
                      marginRight: '12px',
                      width: isSelected === index ? '18px' : 0,
                      backgroundColor: '#FFF',
                      transitionProperty: 'all',
                      transitionTimingFunction: 'ease',
                      transitionDuration: '.3s',
                    })}
                  />
                </React.Fragment>
              );
            })}
          </div>
        </div>

        <div
          className={css({
            flexGrow: 1,
            overflow: 'hidden',
            flexFlow: 'row nowrap',
            scrollSnapType: 'x mandatory',
            overflowY: 'hidden',
            display: 'flex',
          })}
        >
          {PageItemList.map((PageI, index) => {
            return (
              <div
                key={index}
                ref={(el) => {
                  return (ref.current[index] = el);
                }}
                className={css({
                  width: '100vw',
                  flexShrink: 0,
                  display: 'flex',
                  alignContent: 'center',
                  placeContent: 'center',
                })}
              >
                {PageI}
              </div>
            );
          })}
        </div>
      </div>
    </FullPageWithColor>
  );
}

export const PageItemList = [
  <PageItem key={0} />,
  <PageItem key={1} />,
  <PageItem key={2} />,
  <PageItem key={3} />,
];

export function PageItem() {
  const [css, $theme] = useStyletron();

  return (
    <>
      <div
        className={css({
          maxWidth: '1200px',
          padding: '0 12px',
          margin: '0 auto',
          width: 'calc(100% - 24px)',
          display: 'flex',
          alignContent: 'center',
          placeContent: 'center',
          flexWrap: 'wrap',
        })}
      >
        <div
          className={css({
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            placeContent: 'center',
          })}
        >
          <HeadingLarge
            $style={{
              fontWeight: 600,
              width: '620px',
              [$theme.mediaQuery.small]: {
                width: '100%',
                maxWidth: 'none',
              },
              [$theme.mediaQuery.medium]: {
                maxWidth: '620px',
                minWidth: '320px',
              },
              [$theme.mediaQuery.large]: {
                maxWidth: '620px',
                minWidth: '320px',
              },
            }}
          >
            Modernize business or company with Anthaathi.
          </HeadingLarge>
          {/* <LabelMedium $style={{width: '420px', maxWidth: '80vw'}}>
            VAPT safeguards against most of the known vulnerabilities and
            exploits.
          </LabelMedium> */}
        </div>

        <div
          className={css({
            marginTop: '24px',
            [$theme.mediaQuery.large]: {display: 'block', marginTop: 0},
          })}
        >
          <img
            src="/Hero-Img-01.png"
            alt=""
            className={css({
              width: '420px',
              maxWidth: '50vw',
              [$theme.mediaQuery.small]: {
                width: '220px',
                marginBottom: '40px',
              },
              [$theme.mediaQuery.medium]: {
                width: '420px',
                marginTop: '25px',
                marginBottom: '40px',
              },
              [$theme.mediaQuery.large]: {
                width: '420px',
                marginTop: '48px',
                marginBottom: '48px',
              },
            })}
            draggable={false}
          />
        </div>
      </div>
    </>
  );
}

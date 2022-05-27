import {AppBar} from '@/components/AppBar';
import {HeadingLarge, LabelSmall} from 'baseui/typography';
import * as React from 'react';
import {useEffect, useRef, useState} from 'react';
import {useStyletron} from 'baseui';
import {FullPageWithColor} from '@/components/FullPageWithColor';
import Image from 'next/image';
import {Button} from 'baseui/button';
import Link from 'next/link';

export function Section1() {
  const [css] = useStyletron();

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
              maxWidth: '1400px',
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

export const PageItemList = [<PageItem key={0} />];

export function PageItem() {
  const [css, $theme] = useStyletron();

  return (
    <>
      <div
        className={css({
          maxWidth: '1400px',
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
                width: 'calc(100% - 48px)',
                maxWidth: 'none',
                marginLeft: '24px',
                marginRight: '24px',
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
        </div>

        <div
          className={css({
            [$theme.mediaQuery.large]: {display: 'none'},
          })}
        >
          <Link passHref={true} href="/contact-us">
            <Button>Contact Us</Button>
          </Link>
        </div>

        <div
          className={css({
            marginTop: '24px',
            [$theme.mediaQuery.large]: {display: 'block', marginTop: 0},
            [$theme.mediaQuery.small]: {
              display: 'none',
            },
          })}
        >
          <div className={css({width: '420px', maxWidth: '40vh'})}>
            <Image
              src="/Hero-Img-01.png"
              alt=""
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
              className={css({
                width: '420px',
                maxWidth: '50vw',
                maxHeight: '50vh!important',
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
      </div>
    </>
  );
}

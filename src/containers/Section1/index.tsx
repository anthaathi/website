import {AppBar} from '@/components/AppBar';
import {
  HeadingSmall,
  HeadingXXLarge,
  LabelLarge,
  LabelMedium,
  LabelSmall,
} from 'baseui/typography';
import * as React from 'react';
import {useCallback, useContext, useEffect, useRef, useState} from 'react';
import {useStyletron} from 'baseui';
import {FullPageWithColor} from '@/components/FullPageWithColor';
import Image from 'next/image';
import {Button, SHAPE, SIZE} from 'baseui/button';
import Link from 'next/link';
import {CompanyName} from '../../CompanyName';
import {PlayFilledAlt} from '@carbon/icons-react';
import {Block} from 'baseui/block';

export const SectionChange = React.createContext<[() => void, () => void]>(
  [] as never,
);

export function Section1() {
  const [css] = useStyletron();

  const ref = useRef<HTMLDivElement[]>([]);

  const timeout = useRef(null);
  const [isMoving, setIsMoving] = useState(true);

  const [isSelected, setIsSelected] = useState(0);

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
        if (prev === 0) {
          return prev;
        }

        if (prev + 1 === ref.current.length) {
          return 0;
        }

        return prev + 1;
      });
    }, 10000);
  }, [isSelected, isMoving]);

  const goNext = useCallback(() => {
    setIsSelected((prev) => {
      if (prev + 1 === ref.current.length) {
        return 0;
      }

      return prev + 1;
    });
  }, []);

  const goPrevious = useCallback(() => {
    setIsSelected((prev) => {
      if (prev - 1 === -1) {
        return ref.current.length;
      }

      return prev + 1;
    });
  }, []);

  return (
    <SectionChange.Provider value={[goPrevious, goNext]}>
      <FullPageWithColor shouldHaveMinHeight={false}>
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
            autoPlay
            loop
            muted
            playsInline
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
    </SectionChange.Provider>
  );
}

function NextPageNavigator({title}: {title?: React.ReactNode}) {
  const [css] = useStyletron();
  const [, next] = useContext(SectionChange);

  return (
    <Block marginTop="scale400" display="flex" alignItems="center">
      <div>
        <Button shape={SHAPE.circle} size={SIZE.large} onClick={() => next()}>
          <PlayFilledAlt size={32} className={css({color: '#F5B640'})} />
        </Button>
      </div>

      <span className={css({width: '24px'})} />

      <div
        className={css({
          height: '2px',
          width: '20vw',
          maxWidth: '200px',
          backgroundColor: 'rgba(255,255,255, .3)',
        })}
      ></div>

      <span className={css({width: '24px'})} />

      <LabelMedium $style={{color: 'rgba(255,255,255,.7)'}}>
        {title ?? 'See how we help our clients'}
      </LabelMedium>
    </Block>
  );
}

export const PageItemList = [
  <PageItem
    miniTitle={`Welcome to ${CompanyName}`}
    title={`Development, DevSecOps, AI, and more.`}
    subTitle={`How we escalate technology and security for the digital age.`}
    key={0}
    action={<NextPageNavigator />}
  />,
  <PageItem
    miniTitle={`V REKRUT`}
    title={`Online platform for the recruitment.`}
    subTitle="V REKRUT is a UAE based recruitment agency specializing in recruitment at all levels"
    key={1}
    action={
      <div>
        <Link passHref={true} href="https://vrekrut.com/">
          <Button>View Platform</Button>
        </Link>
      </div>
    }
  />,
  <PageItem
    miniTitle={`Voter Search for Kolhapur`}
    title={`Search voter records in seconds`}
    subTitle="Platform to search voting records in milliseconds"
    key={1}
    action={
      <div>
        <Link passHref={true} href="https://www.vskn22.in/">
          <Button>View Platform</Button>
        </Link>
      </div>
    }
  />,
];

export function PageItem({
  miniTitle,
  title,
  subTitle,
  action,
}: {
  miniTitle: string;
  title: string;
  subTitle: React.ReactNode;
  action?: React.ReactNode;
}) {
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
            flexGrow: 1,
            [$theme.mediaQuery.small]: {
              maxWidth: 'none',
              marginLeft: '12px',
              marginRight: '12px',
            },
            [$theme.mediaQuery.medium]: {
              marginLeft: 0,
              marginRight: 0,
            },
            [$theme.mediaQuery.large]: {
              marginLeft: 0,
              marginRight: 0,
            },
          })}
        >
          <LabelLarge
            $style={{
              color: '#F5B640',
              textTransform: 'uppercase',
            }}
          >
            {miniTitle}
          </LabelLarge>
          <HeadingXXLarge
            marginTop="scale200"
            marginBottom="scale200"
            $style={{
              fontWeight: 600,
              width: '620px',
              [$theme.mediaQuery.small]: {
                width: 'calc(100% - 48px)',
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
            {title}
          </HeadingXXLarge>

          <HeadingSmall
            marginTop="scale200"
            color="rgba(255,255,255,.8)"
            maxWidth="55%"
          >
            {subTitle}
          </HeadingSmall>

          {action}
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

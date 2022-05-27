import React, {useState} from 'react';
import {useStyletron} from 'baseui';
import {LabelLarge} from 'baseui/typography';
import {Button, KIND, SHAPE} from 'baseui/button';
import {Menu} from 'baseui/icon';
import Link from 'next/link';
import {StyledLink} from 'baseui/link';

export function AppBar() {
  const [css] = useStyletron();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <>
      <div
        className={css({
          minHeight: '96px',
          borderBottom: '1px solid rgba(255, 255, 255, .28)',
          position: 'relative',
          zIndex: 3,
        })}
      >
        <div
          className={css({
            display: 'flex',
            maxWidth: '1400px',
            margin: '0 auto',
            minHeight: '96px',
            alignItems: 'center',
            padding: '0 24px',
          })}
        >
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className="ae"
          >
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <rect className="cls-1" width="20" height="20"></rect>
                <polygon
                  className="af"
                  points="250 174.64 299.5 216.1 250 257.55 250 310.26 344.16 231.4 344.16 200.8 250 121.93 250 174.64"
                ></polygon>
                <polygon
                  className="af"
                  points="250 242.45 200.5 283.9 250 325.36 250 378.07 155.84 299.2 155.84 268.6 250 189.74 250 242.45"
                ></polygon>
              </g>
            </g>
          </svg> */}
          <Link passHref={true} href={'/'}>
            <LabelLarge
              $style={{
                letterSpacing: '0.64px',
                fontSize: '24px',
                cursor: 'pointer',
              }}
            >
              Anthaathi
            </LabelLarge>
          </Link>
          <AppBarMenu />
          <span className={css({flexGrow: 1})} />

          <Button kind={KIND.minimal} onClick={() => setIsOpenMenu(true)}>
            <Menu size={36} />
          </Button>
        </div>
      </div>

      <div
        className={css({
          backgroundColor: 'rgba(19,22,92, 0.8)',
          opacity: isOpenMenu ? 1 : 0,
          pointerEvents: isOpenMenu ? 'inherit' : 'none',
          backdropFilter: 'blur(6px)',
          position: 'fixed',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: 9999,
          transitionProperty: 'all',
          transitionDuration: '.2s',
          transitionTimingFunction: 'ease',
        })}
      >
        <div
          className={css({
            display: 'flex',
            alignContent: 'center',
            placeContent: 'center',
            flexDirection: 'column',
            placeItems: 'center',
            height: '100vh',
          })}
        >
          <span className={css({flexGrow: 1})} />
          {menuItems.map((item, index) => {
            return (
              <Link passHref={true} href={item.url} key={index}>
                <StyledLink
                  $style={{
                    textDecoration: 'none',
                    fontSize: '24px',
                    marginBottom: '12px',
                  }}
                >
                  {item.label}
                </StyledLink>
              </Link>
            );
          })}

          <span className={css({flexGrow: 1})} />

          <Button
            kind={KIND.secondary}
            shape={SHAPE.circle}
            $style={{
              position: 'absolute',
              bottom: '96px',
            }}
            onClick={() => setIsOpenMenu(false)}
          >
            X
          </Button>
        </div>
      </div>
    </>
  );
}

export const menuItems: {label: string; url: string}[] = [
  {
    label: 'Product',
    url: '/product',
  },
  {
    label: 'Services',
    url: '/',
  },
  // {
  //   label: 'About Us',
  //   url: '/',
  // },
  {label: 'Contact Us', url: '/contact-us'},
];

function AppBarMenu() {
  const [css, $theme] = useStyletron();

  return (
    <>
      <span className={css({marginLeft: '26px'})} />

      {menuItems.map((item, index) => {
        return (
          <Link passHref={true} href={item.url} key={index}>
            <StyledLink
              $style={{
                textDecoration: 'none',
                cursor: 'pointer',
                paddingRight: '12px',
                paddingLeft: '12px',
                fontWeight: 300,
                minHeight: '96px',
                display: 'flex',
                alignContent: 'center',
                placeItems: 'center',
                borderBottom: '2px solid transparent',
                transitionProperty: 'all',
                fontSize: '15px',
                ':hover': {borderBottom: '2px solid #EEE'},
                [$theme.mediaQuery.small]: {
                  display: 'none',
                },
                [$theme.mediaQuery.medium]: {
                  display: 'none',
                },
                [$theme.mediaQuery.large]: {
                  display: 'flex',
                },
              }}
            >
              {item.label}
            </StyledLink>
          </Link>
        );
      })}

      <span className={css({marginRight: '12px'})} />
    </>
  );
}

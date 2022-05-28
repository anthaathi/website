import React, {useEffect, useState} from 'react';
import {useStyletron} from 'baseui';
import {LabelLarge} from 'baseui/typography';
import {Button, KIND, SHAPE} from 'baseui/button';
import {Menu} from 'baseui/icon';
import Link from 'next/link';
import {StyledLink} from 'baseui/link';
import {CompanyName} from 'CompanyName';
import {Close} from '@carbon/icons-react';

export function AppBar() {
  const [css, $theme] = useStyletron();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useEffect(() => {
    if (!isOpenMenu) {
      return;
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.keyCode === 27 || e.key === 'Escape') {
        setIsOpenMenu(false);
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpenMenu]);

  return (
    <>
      <div
        data-component="app-bar"
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
          <Link passHref={true} href={'/'}>
            <a href="" className={css({textDecoration: 'none'})}>
              <LabelLarge
                $style={{
                  letterSpacing: '0.64px',
                  fontSize: '24px',
                  cursor: 'pointer',
                }}
              >
                {CompanyName}
              </LabelLarge>
            </a>
          </Link>
          <AppBarMenu />
          <span className={css({flexGrow: 1})} />

          <Button
            kind={KIND.tertiary}
            onClick={() => setIsOpenMenu(true)}
            $style={{[$theme.mediaQuery.large]: {display: 'none'}}}
          >
            <Menu size={36} />
          </Button>
        </div>
      </div>

      <div
        className={css({
          backgroundColor: 'rgba(19,22,92, 0.9)',
          opacity: isOpenMenu ? 1 : 0,
          pointerEvents: isOpenMenu ? 'inherit' : 'none',
          backdropFilter: 'blur(12px)',
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
                    textTransform: 'uppercase',
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
            <Close />
          </Button>
        </div>
      </div>
    </>
  );
}

export const menuItems: {label: string; url: string}[] = [
  {
    label: 'Services',
    url: '/',
  },
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
              tabIndex={0}
              $style={{
                textDecoration: 'none',
                cursor: 'pointer',
                paddingRight: '12px',
                paddingLeft: '12px',
                fontWeight: 300,
                minHeight: '96px',
                textTransform: 'uppercase',
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

import React, {useEffect, useState} from 'react';
import {useStyletron} from 'baseui';
import {
  HeadingMedium,
  LabelLarge,
  LabelMedium,
  LabelSmall,
} from 'baseui/typography';
import {CompanyName} from '../../CompanyName';
import {
  ApplicationWeb,
  ApplicationMobile,
  ShoppingCatalog,
  CloudServices,
  EdtLoop,
} from '@carbon/icons-react';

export function Section2() {
  const [css, $theme] = useStyletron();

  return (
    <div
      id="services"
      className={css({
        minHeight: '100vh',
        position: 'relative',
        maxHeight: '1400px',
        width: '100%',
        overflow: 'hidden',
        [$theme.mediaQuery.medium]: {
          maxHeight: 'none',
        },
        [$theme.mediaQuery.small]: {
          maxHeight: 'none',
        },
      })}
    >
      <div
        className={css({
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundImage: 'url(/Blue-BG.jpg)',
          backgroundRepeat: 'none',
          backgroundSize: 'cover',
        })}
      />

      <div
        className={css({
          display: 'flex',
          flexDirection: 'row',
          padding: '0 2rem',
        })}
      >
        <div
          className={css({
            zIndex: 99,
            position: 'relative',
            maxWidth: '1400px',
            margin: '0 auto',
            display: 'flex',
            minHeight: '100vh',
            width: '100%',
            flexDirection: 'column',
            [$theme.mediaQuery.large]: {
              flexDirection: 'row',
            },
          })}
        >
          <div
            className={css({
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              placeContent: 'center',
              paddingTop: '4rem',
              [$theme.mediaQuery.large]: {
                paddingTop: '0',
                paddingRight: '6rem',
                width: 'calc(50% - 6rem)',
                paddingBottom: '0',
              },
            })}
          >
            <LabelSmall $style={{color: '#F5B640'}}>OUR PURPOSE</LabelSmall>
            <HeadingMedium>
              To solve real-world cybersecurity problems using people,
              processes, and technology.
            </HeadingMedium>

            <div>
              <LabelLarge>PEOPLE</LabelLarge>
              <LabelMedium
                $style={{fontWeight: 300, lineHeight: 1.4, opacity: 0.9}}
                marginTop="scale600"
              >
                {CompanyName} provides training to Cybersecurity Professionals,
                corporate companies, government firms, public and private
                sectors, multinational organizations, and others. {CompanyName}{' '}
                has also delivered a 6-week hands-on training to 140+
                professionals on Red Team Assessment.
              </LabelMedium>
              <LabelLarge
                $style={{fontWeight: 300, lineHeight: 1.4, opacity: 0.9}}
                marginTop="scale600"
              >
                PROCESS
              </LabelLarge>
              <LabelMedium
                $style={{fontWeight: 300, lineHeight: 1.4, opacity: 0.9}}
                marginTop="scale600"
              >
                {CompanyName} offers GAP Assessment with its methodology
                tailored individually for clients to improve their overall
                security posture. Non-Technology-based companies, Companies that
                have recently acquired funding, potential startups, and
                companies that were recently part of the cyberattack, want to
                improve the security but don’t know where to start. This GAP
                Assessment identifies the key problems that require immediate
                attention.
              </LabelMedium>
              <LabelLarge marginTop="scale600">TECHNOLOGY</LabelLarge>{' '}
              <LabelMedium marginTop="scale600">
                {CompanyName} has its own Advanced Phishing Simulation tool
                called Hooked for phishing simulation offering both a SAAS and
                on-premises model.
              </LabelMedium>
            </div>
          </div>
          <div
            className={css({
              width: '50%',
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              position: 'relative',
              paddingBottom: '4rem',
              placeContent: 'center',
              [$theme.mediaQuery.small]: {
                width: '100%',
                paddingTop: '4rem',
              },
              [$theme.mediaQuery.medium]: {
                width: '100%',
                paddingTop: '4rem',
              },
              [$theme.mediaQuery.large]: {
                width: '50%',
                paddingTop: '4rem',
              },
            })}
          >
            <div
              className={css({
                position: 'absolute',
                background: 'rgba(24,2,85, 0.8)',
                top: 0,
                right: '-820px',
                bottom: 0,
                left: 0,
                display: 'none',
                [$theme.mediaQuery.large]: {
                  display: 'inherit',
                },
              })}
            />
            <Items />
          </div>
        </div>
      </div>
    </div>
  );
}

const items = [
  {
    label: 'Web Development',
    icon: ApplicationWeb,
    image: '/web1.png',
    content:
      'We do not just web design, but out-of-the box digital experiences that takes your business to the next level.',
  },
  {
    label: 'Mobile Development',
    icon: ApplicationMobile,
    image: '/phn.png',
    content:
      'We offer a full cycle of application design, integration and management services. Whether it is a consumer oriented app or a transformative enterprise-class solution, the company leads the entire mobile app development process from ideation and concept to delivery.',
  },
  {
    label: 'ECommerce Development',
    icon: ShoppingCatalog,
    image: '/ecommerce.png',
    content:
      'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
  },
  {
    label: 'Cloud Services',
    icon: CloudServices,
    image: '/cloud1.png',
    content:
      'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
  },
  {
    label: 'DevSecOps Services',
    icon: EdtLoop,
    image: '/devops1.png',
    content:
      'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
  },
];

function Items() {
  return (
    <>
      {items.map((value, index) => {
        return <Item key={index} value={value} />;
      })}
    </>
  );
}

function Item({value}) {
  const [css, $theme] = useStyletron();
  const [isVisible, setIsVisible] = useState(false);
  const [, setAnimatedIsVisible] = useState(isVisible);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (!isVisible) {
      timeout = setTimeout(() => {
        setAnimatedIsVisible(isVisible);
      }, 100);
    } else {
      setAnimatedIsVisible(isVisible);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [isVisible]);

  return (
    <div
      className={css({
        position: 'relative',
        width: '50%',
        [$theme.mediaQuery.small]: {
          width: '100%',
        },
        [$theme.mediaQuery.medium]: {
          width: '50%',
        },
        [$theme.mediaQuery.large]: {
          width: '50%',
          height: '160px',
        },
      })}
    >
      <div
        onFocus={() => {
          setIsVisible(true);
        }}
        onBlur={() => {
          setIsVisible(false);
        }}
        onMouseOver={() => {
          setIsVisible(true);
        }}
        onMouseOut={() => {
          setIsVisible(false);
        }}
        tabIndex={0}
        className={css({
          width: 'calc(100% - 24px)',
          padding: '12px',
          display: 'flex',
          placeItems: 'center',
          placeContent: 'center',
          flexDirection: 'column',
          cursor: 'pointer',
          userSelect: 'none',
          marginBottom: '2rem',
          [$theme.mediaQuery.large]: {
            ':hover': {
              backgroundColor: '#0095D6',
              padding: '48px',
              margin: '-24px',
              zIndex: 99,
            },
            ':active': {
              backgroundColor: '#0095D6',
              padding: '48px',
              margin: '-24px',
              zIndex: 99,
            },
            ':focus': {
              backgroundColor: '#0095D6',
              padding: '48px',
              margin: '-24px',
              zIndex: 99,
            },
            position: 'absolute',
          },
          transitionProperty: 'all',
          transitionDuration: '.1s',
          transitionTimingFunction: 'ease',
        })}
      >
        <value.icon size={48} color="#FFF" />
        <LabelMedium $style={{textAlign: 'center', marginTop: '12px'}}>
          {value.label}
        </LabelMedium>
        <LabelSmall
          $style={{
            overflow: 'hidden',
            transitionProperty: 'all',
            transitionDuration: '.1s',
            transitionTimingFunction: 'ease',
            maxHeight: isVisible ? '220px' : 0,
            marginTop: '12px',
          }}
        >
          {value.content}
        </LabelSmall>
      </div>
    </div>
  );
}

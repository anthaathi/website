import React from 'react';
import {useStyletron} from 'baseui';
import {LabelLarge, LabelMedium} from 'baseui/typography';
import {StyledLink} from 'baseui/link';
import Link from 'next/link';

export function Footer() {
  const [css, $theme] = useStyletron();

  return (
    <>
      <div className={css({backgroundColor: '#151618'})}>
        <div
          className={css({
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '4rem',
            display: 'flex',
            flexWrap: 'wrap',
          })}
        >
          {items.map((res, index) => {
            const title =
              typeof res.title === 'function' ? (
                <res.title />
              ) : (
                <LabelLarge $style={{color: '#0095D6'}}>{res.title}</LabelLarge>
              );

            return (
              <div
                className={css({
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  width: '100%',
                  textAlign: 'center',
                  [$theme.mediaQuery.large]: {
                    width: 'inherit',
                    textAlign: 'inherit',
                  },
                })}
                key={index}
              >
                <div className={css({marginBottom: '12px'})}>{title}</div>
                <ul
                  className={css({
                    marginLeft: 0,
                    paddingLeft: 0,
                    listStyle: 'none',
                    maxWidth: '100%',
                    [$theme.mediaQuery.large]: {
                      maxWidth: '180px',
                    },
                  })}
                >
                  {res.items.map((item, index) => (
                    <li key={index} className={css({marginBottom: '6px'})}>
                      <Link passHref={true} href={item.url}>
                        <StyledLink $style={{textDecoration: 'none'}}>
                          {item.item}
                        </StyledLink>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className={css({
          backgroundColor: '#0095D6',
          padding: '1rem 2rem',
        })}
      >
        <div
          className={css({maxWidth: '1200px', margin: '0 auto', width: '100%'})}
        >
          <LabelMedium>
            Copyright &copy; 2022 - Anthaathi - All Rights Reserved
          </LabelMedium>
        </div>
      </div>
    </>
  );
}

const items = [
  {
    title: function () {
      const [css] = useStyletron();

      return (
        <div
          className={css({
            display: 'flex',
            alignContent: 'center',
            placeContent: 'center',
          })}
        >
          <LabelLarge
            $style={{
              letterSpacing: '0.64px',
              fontSize: '32px',
            }}
          >
            Anthaathi
          </LabelLarge>
        </div>
      );
    },
    items: [
      {
        item: 'Partner Networks',
        url: '/',
      },
      {
        item: 'Newsroom',
        url: '/',
      },
      {
        item: 'Case Studies',
        url: '/',
      },
      {
        item: 'Careers',
        url: '/',
      },
    ],
  },
  {
    title: 'Services',
    items: [
      {
        item: 'Web Development',
        url: '/',
      },
      {
        item: 'Mobile Development',
        url: '/',
      },
      {
        item: 'ECommerce Development',
        url: '/',
      },
      {
        item: 'Cloud Services',
        url: '/',
      },
      {
        item: 'DevSecOps Services',
        url: '/',
      },
    ],
  },
  {
    title: 'About',
    items: [
      {
        item: 'Company Overview',
        url: '/',
      },
      {
        item: 'Our Mission and Values',
        url: '/',
      },
      {
        item: 'Our History',
        url: '/',
      },
      {
        item: 'Leadership & Governance',
        url: '/',
      },
    ],
  },
  {
    title: 'Quick Links',
    items: [
      {
        item: 'Newsroom & Social Media',
        url: '/',
      },
      {
        item: 'Global Locations',
        url: '/',
      },
      {
        item: 'Corporate Responsibility',
        url: '/',
      },
      {
        item: 'Careers',
        url: '/',
      },
    ],
  },
  {
    title: 'Insights',
    items: [
      {
        item: 'Operational Efficiency IT Infrastructure',
        url: '/',
      },
      {
        item: 'The evolving threat environments',
        url: '/',
      },
      {
        item: 'View All Insights',
        url: '/',
      },
    ],
  },
];

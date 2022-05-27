import React from 'react';
import {useStyletron} from 'baseui';
import {HeadingLarge, HeadingMedium} from 'baseui/typography';

export function Section4() {
  const [css] = useStyletron();

  return (
    <div
      className={css({
        display: 'flex',
        position: 'relative',
        minHeight: '120px',
      })}
    >
      <div
        className={css({
          position: 'absolute',
          backgroundImage: 'url(/MB-BG.png)',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1,
        })}
      />

      <div
        className={css({
          position: 'absolute',
          backgroundColor: '#0095D6',
          opacity: 0.88,
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1,
        })}
      />

      <div
        className={css({
          width: '100%',
          maxWidth: '900px',
          margin: '0 auto',
          zIndex: 3,
          padding: '2rem',
        })}
      >
        <HeadingMedium $style={{textAlign: 'center', lineHeight: '1.6'}}>
          With Anthaathi, you get excellence with each technology and be part of
          the software lifecycle. We help our customers build modern businesses
          and secure them using our security experts.
        </HeadingMedium>
      </div>
    </div>
  );
}

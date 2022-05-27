import React from 'react';
import {useStyletron} from 'baseui';
import {HeadingMedium} from 'baseui/typography';

export const Products = () => {
  const [css] = useStyletron();

  return (
    <div
      className={css({
        maxWidth: '1400px',
        padding: '0 12px',
        margin: '0 auto',
        width: 'calc(100% - 24px)',
        display: 'flex',
        alignContent: 'center',
        placeContent: 'center',
        // flexWrap: 'wrap',
        flexGrow: 1,
        zIndex: 3,
      })}
    >
      <div
        className={css({
          flexGrow: 1,
          width: '60%',
        })}
      >
        <HeadingMedium $style={{fontWeight: 600}} marginBottom="scale400">
          CRM
        </HeadingMedium>
      </div>
    </div>
  );
};

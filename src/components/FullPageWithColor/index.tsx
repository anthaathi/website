import * as React from 'react';
import {useStyletron} from 'baseui';

export const FullPageWithColor = ({
  children,
  shouldHaveMinHeight = true,
}: {
  children: React.ReactNode;
  shouldHaveMinHeight?: boolean;
}) => {
  const [css] = useStyletron();

  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        ...(shouldHaveMinHeight
          ? {minHeight: '100vh'}
          : {
              minHeight: '100vh',
            }),
      })}
    >
      <div
        className={css({
          position: 'absolute',
          opacity: '.9',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          zIndex: 2,
          background:
            'linear-gradient(135deg, rgba(38,88,137,1) 0%, rgba(13,41,98,1) 35%, rgba(24,2,85,1) 100%)',
        })}
      />

      {children}
    </div>
  );
};

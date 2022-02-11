import * as React from 'react';
import {useStyletron} from 'baseui';
import {Block} from 'baseui/block';
import {HeadingLarge} from 'baseui/typography';
import LogoGitHub32 from '@carbon/icons-react/lib/logo--github/32';
import Link from 'next/link';
import {StyledLink} from 'baseui/link';
import Head from 'next/head';

const Index: React.FC = () => {
  const [css, $theme] = useStyletron();
  return (
    <Block
      display="flex"
      flexDirection="column"
      alignContent="center"
      placeContent="center"
      placeItems="center"
      backgroundColor="background"
      minHeight="100vh"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
        className={css({width: '320px'})}
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <rect className="cls-1" width="500" height="500" />
            <polygon
              className={css({fill: $theme.colors.contentPrimary})}
              points="250 174.64 299.5 216.1 250 257.55 250 310.26 344.16 231.4 344.16 200.8 250 121.93 250 174.64"
            />
            <polygon
              className={css({fill: $theme.colors.contentPrimary})}
              points="250 242.45 200.5 283.9 250 325.36 250 378.07 155.84 299.2 155.84 268.6 250 189.74 250 242.45"
            />
          </g>
        </g>
      </svg>

      <HeadingLarge
        $style={{
          letterSpacing: '8px',
          marginTop: '-20px',
          marginBottom: '4rem',
        }}
      >
        ANTHAATHI
      </HeadingLarge>

      <Head>
        <title>Anthaathi</title>
      </Head>

      <Link href="https://github.com/anthaathi" passHref={true}>
        <StyledLink target="_blank">
          <LogoGitHub32 className={css({fill: '#FFF'})} />
        </StyledLink>
      </Link>
    </Block>
  );
};

export default Index;

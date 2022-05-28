import React from 'react';
import {LightTheme, ThemeProvider, useStyletron} from 'baseui';
import {FormControl} from 'baseui/form-control';
import {Input, InputOverrides} from 'baseui/input';
import {HeadingMedium, LabelMedium} from 'baseui/typography';
import {Cell, Grid} from 'baseui/layout-grid';
import {StyledLink} from 'baseui/link';
import {Textarea} from 'baseui/textarea';
import {Button, KIND} from 'baseui/button';
import {expandBorderStyles} from 'baseui/styles';

const inputOverride: InputOverrides = {
  Root: {
    style: {
      backgroundColor: 'transparent!important',
      ...expandBorderStyles({
        borderWidth: '1px',
        borderColor: '#FFF',
        borderStyle: 'solid',
      }),
    },
  },
  InputContainer: {
    style: {
      backgroundColor: 'transparent!important',
    },
  },
  Input: {
    style: {
      color: '#FFF',
      caretColor: '#FFF',
    },
  },
};

export const ContactUsForm = () => {
  const [css, $theme] = useStyletron();

  return (
    <div
      className={css({
        maxWidth: '1400px',
        padding: '0 12px',
        margin: '0 auto',
        width: 'calc(100% - 24px)',
        alignContent: 'center',
        placeContent: 'center',
        flexWrap: 'wrap',
        flexGrow: 1,
        zIndex: 3,
        display: 'flex',
        flexDirection: 'column',
        [$theme.mediaQuery.large]: {
          display: 'flex',
          flexDirection: 'row',
        },
      })}
    >
      <div
        data-component="contact-us-form-section-1"
        className={css({
          flexGrow: 1,
          [$theme.mediaQuery.medium]: {
            width: '60%',
          },
          [$theme.mediaQuery.large]: {
            width: '60%',
          },
        })}
      >
        <HeadingMedium $style={{fontWeight: 600}} marginBottom="scale400">
          Contact Us
        </HeadingMedium>

        <LabelMedium>
          Give us some details below and we’ll be in touch to discuss your
          needs.
        </LabelMedium>

        <form className={css({width: '100%', marginTop: '2rem'})}>
          <ThemeProvider theme={LightTheme}>
            <Grid gridMargins={0} gridMaxWidth={0}>
              <Cell span={[12, 12, 6]}>
                <FormControl
                  label="Full name"
                  htmlFor="fullName"
                  overrides={{Label: {style: {color: '#FFF'}}}}
                >
                  <Input id="fullName" overrides={inputOverride} />
                </FormControl>
              </Cell>
              <Cell span={[12, 12, 6]}>
                <FormControl
                  label="Company name"
                  htmlFor="companyName"
                  overrides={{Label: {style: {color: '#FFF'}}}}
                >
                  <Input id="companyName" overrides={inputOverride} />
                </FormControl>
              </Cell>
              <Cell span={[12, 12, 6]}>
                <FormControl
                  label="Email"
                  htmlFor="email"
                  overrides={{Label: {style: {color: '#FFF'}}}}
                >
                  <Input id="email" type="email" overrides={inputOverride} />
                </FormControl>
              </Cell>
              <Cell span={[12, 12, 6]}>
                <FormControl
                  label="Contact number"
                  htmlFor="contactNumber"
                  overrides={{Label: {style: {color: '#FFF'}}}}
                >
                  <Input
                    id="contactNumber"
                    type="tel"
                    overrides={inputOverride}
                  />
                </FormControl>
              </Cell>
              <Cell span={[12, 12, 6]}>
                <FormControl
                  label="Job title"
                  htmlFor="jobTitle"
                  overrides={{Label: {style: {color: '#FFF'}}}}
                >
                  <Input id="jobTitle" overrides={inputOverride} />
                </FormControl>
              </Cell>
              <Cell span={[12, 12, 6]}>
                <FormControl
                  label="Subject"
                  htmlFor="subject"
                  overrides={{Label: {style: {color: '#FFF'}}}}
                >
                  <Input id="subject" overrides={inputOverride} />
                </FormControl>
              </Cell>
              <Cell span={[12, 12, 6]}>
                <FormControl
                  label="Message"
                  htmlFor="message"
                  overrides={{Label: {style: {color: '#FFF'}}}}
                >
                  <Textarea
                    id="message"
                    overrides={{
                      InputContainer: {
                        style: {backgroundColor: 'transparent!important'},
                      },
                      ['Root' as never]: {
                        style: {
                          backgroundColor: 'transparent!important',
                          ...expandBorderStyles({
                            borderWidth: '1px',
                            borderColor: '#FFF',
                            borderStyle: 'solid',
                          }),
                        },
                      },
                      Input: {
                        style: {
                          color: '#FFF',
                          backgroundColor: 'transparent!important',
                          caretColor: '#FFF',
                        },
                      },
                    }}
                  />
                </FormControl>
              </Cell>

              <Cell span={[12, 12, 6]}>
                <Button
                  kind={KIND.secondary}
                  $style={{
                    marginTop: '2rem',
                    marginBottom: '2rem',
                    fontWeight: 300,
                  }}
                  size="large"
                >
                  Send Message
                </Button>
              </Cell>
            </Grid>
          </ThemeProvider>
        </form>
      </div>
      <div
        data-component="contact-us-form-section-2"
        className={css({
          display: 'flex',
          flexDirection: 'column',
          placeContent: 'center',
          [$theme.mediaQuery.medium]: {
            width: '40%',
          },
          [$theme.mediaQuery.large]: {
            width: '40%',
          },
        })}
      >
        <div
          className={css({
            [$theme.mediaQuery.large]: {
              paddingLeft: '4rem',
              paddingRight: '4rem',
              paddingBottom: '8rem',
            },
          })}
        >
          <HeadingMedium
            $style={{textDecoration: 'underline', color: '#F5B640'}}
            marginBottom="scale1000"
          >
            Want to be part our team?
          </HeadingMedium>

          <StyledLink>Email: support@anthaathi.org</StyledLink>
        </div>
      </div>
    </div>
  );
};

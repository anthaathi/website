import React from 'react';
import {BaseProvider, LightTheme, useStyletron} from 'baseui';
import {FormControl} from 'baseui/form-control';
import {Input, InputOverrides} from 'baseui/input';
import {HeadingMedium, LabelLarge, LabelMedium} from 'baseui/typography';
import {Cell, Grid} from 'baseui/layout-grid';
import {StyledLink} from 'baseui/link';
import {Textarea} from 'baseui/textarea';
import {Button, KIND} from 'baseui/button';

const inputOverwride: InputOverrides = {
  Root: {
    style: {
      backgroundColor: 'transparent!important',
      borderWidth: '1px',
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
    },
  },
};

export const ContactUsForm = () => {
  const [css] = useStyletron();

  return (
    <div
      className={css({
        maxWidth: '1200px',
        padding: '0 12px',
        margin: '0 auto',
        width: 'calc(100% - 24px)',
        display: 'flex',
        alignContent: 'center',
        placeContent: 'center',
        flexWrap: 'wrap',
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
          Contact Us
        </HeadingMedium>

        <LabelMedium>
          Give us some details below and we’ll be in touch to discuss your
          needs.
        </LabelMedium>

        <form className={css({width: '100%', marginTop: '2rem'})}>
          <BaseProvider theme={LightTheme}>
            <Grid gridMargins={0} gridMaxWidth={0}>
              <Cell span={6}>
                <FormControl
                  label="Full name"
                  htmlFor="fullName"
                  overrides={{Label: {style: {color: '#FFF'}}}}
                >
                  <Input id="fullName" overrides={inputOverwride} />
                </FormControl>
              </Cell>
              <Cell span={6}>
                <FormControl
                  label="Company name"
                  htmlFor="companyName"
                  overrides={{Label: {style: {color: '#FFF'}}}}
                >
                  <Input id="companyName" overrides={inputOverwride} />
                </FormControl>
              </Cell>
              <Cell span={6}>
                <FormControl
                  label="Email"
                  htmlFor="email"
                  overrides={{Label: {style: {color: '#FFF'}}}}
                >
                  <Input id="email" type="email" overrides={inputOverwride} />
                </FormControl>
              </Cell>
              <Cell span={6}>
                <FormControl
                  label="Contact number"
                  htmlFor="contactNumber"
                  overrides={{Label: {style: {color: '#FFF'}}}}
                >
                  <Input
                    id="contactNumber"
                    type="tel"
                    overrides={inputOverwride}
                  />
                </FormControl>
              </Cell>
              <Cell span={6}>
                <FormControl
                  label="Job title"
                  htmlFor="jobTitle"
                  overrides={{Label: {style: {color: '#FFF'}}}}
                >
                  <Input id="jobTitle" overrides={inputOverwride} />
                </FormControl>
              </Cell>
              <Cell span={6}>
                <FormControl
                  label="Subject"
                  htmlFor="subject"
                  overrides={{Label: {style: {color: '#FFF'}}}}
                >
                  <Input id="subject" overrides={inputOverwride} />
                </FormControl>
              </Cell>
              <Cell span={12}>
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
                          borderWidth: '1px',
                        },
                      },
                      Input: {
                        style: {
                          color: '#FFF',
                          backgroundColor: 'transparent!important',
                        },
                      },
                    }}
                  />
                </FormControl>
              </Cell>

              <Cell span={12}>
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
          </BaseProvider>
        </form>
      </div>
      <div
        className={css({
          display: 'flex',
          flexDirection: 'column',
          placeContent: 'center',
          width: '40%',
        })}
      >
        <div
          className={css({
            paddingLeft: '4rem',
            paddingRight: '4rem',
            paddingBottom: '8rem',
          })}
        >
          <HeadingMedium
            $style={{textDecoration: 'underline', color: '#F5B640'}}
            marginBottom="scale1000"
          >
            Want to be part our team?
          </HeadingMedium>

          <LabelMedium marginBottom="scale600">
            ATC Global Ltd, Street 13B. Downtown Precinct Dubai, United Arab
            Emirates
          </LabelMedium>

          <StyledLink>Email: support@anthaathi.org</StyledLink>
        </div>
      </div>
    </div>
  );
};

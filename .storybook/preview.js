import React from 'react';
import {
  addParameters,
  addDecorator
} from '@storybook/react';
import CodeBlock from '../src/CodeBlock';
import { GlobalStyles, ThemeProvider, Heading, defaultIcons, defaultTheme } from '../src';

const h1 = (props) => <Heading as="h1" fontFamily={`-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`}fontSize="36px" {...props} fontWeight={700} />

addParameters({
  docs: {
    components: {
      code: CodeBlock,
      h1
    },
  },
});

// const theme = {
//   "Button": {
//     "container": {
//       "backgroundColor": "rgb(232, 48, 48)",
//       "borderRadius": 5,
//       "height": 38,
//       "paddingTop": 10,
//       "paddingBottom": 10,
//       "paddingLeft": 34,
//       "paddingRight": 34
//     },
//     "text": {
//       "fontSize": 15,
//       "letterSpacing": {
//         "unit": "PERCENT",
//         "value": 0
//       },
//       "lineHeight": {
//         "unit": "AUTO"
//       },
//       "fontFamily": "Roboto",
//       "fontWeight": "medium"
//     }
//   },
//   "Text": {}
// }

console.log({ ...defaultTheme, icons: defaultIcons })

export const ProviderWithIcons = props => (
  <ThemeProvider theme={{ ...defaultTheme, icons: defaultIcons }} {...props} />
);

addDecorator(storyFn => (
  <>
    <ProviderWithIcons>
      <GlobalStyles />
      {storyFn()}
    </ProviderWithIcons>
  </>
));

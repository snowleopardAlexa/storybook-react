import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { ThemeProvider, theme, CSSReset, Box } from '@chakra-ui/core';
import { withConsole } from '@storybook/addon-console';
import { withKnobs } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <Box m='4'>{story()}</Box>
  </ThemeProvider>
))

addDecorator((storyFn, context) => withConsole()(storyFn)(context))
addDecorator(withKnobs)
addDecorator(withA11y)

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
})


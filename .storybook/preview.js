import React from 'react';
import { ThemeProvider, theme, CSSReset, Box } from '@chakra-ui/core';
import { withConsole } from '@storybook/addon-console';

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <Box m='4'>{story()}</Box>
  </ThemeProvider>
))

addDecorator((storyFn, context) => withConsole()(storyFn)(context))

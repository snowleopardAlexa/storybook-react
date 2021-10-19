import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider, theme, CSSReset, Box } from '@chakra-ui/core';
import { withConsole } from '@storybook/addon-console';
import { withKnobs } from '@storybook/addon-knobs';

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <Box m='4'>{story()}</Box>
  </ThemeProvider>
))

addDecorator((storyFn, context) => withConsole()(storyFn)(context))
addDecorator(withKnobs)
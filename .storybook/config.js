import { configure } from '@storybook/react';

const req = require.context("../src/stories", true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => {
    console.log('FILENAME', filename)
    return req(filename)
  });
}

configure(loadStories, module);
import React from 'react';

import { Bold } from './Bold';

export default {
  title: 'Example/Bold',
  component: Bold,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Bold {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Bold',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Bold',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Bold',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Bold',
};

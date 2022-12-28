import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import type { Story, Meta } from '@storybook/angular';

import { ButtonComponent } from '../button/button.component';
import { HeaderComponent } from './header.component';

export default {
  title: 'Example/Header',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule, ButtonComponent],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  props: args,
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: 'Pablo Ferreira',
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};

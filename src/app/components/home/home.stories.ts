import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { within, userEvent } from '@storybook/testing-library';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { ButtonComponent } from '../button/button.component';

export default {
  title: 'Example/Page',
  component: HomeComponent,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule, ButtonComponent],
    }),
  ],
} as Meta;

const Template: Story<HomeComponent> = (args: HomeComponent) => ({
  props: args,
});

export const LoggedOut = Template.bind({});

export const LoggedIn = Template.bind({});

LoggedIn.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const loginButton = await canvas.getByRole('button', { name: /Log in/i });
  await userEvent.click(loginButton);
};

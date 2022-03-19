import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { TodoComponent } from './todo.component';

export default {
  title: 'TodoComponent',
  component: TodoComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<TodoComponent>;

const Template: Story<TodoComponent> = (args: TodoComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}
import { FormsModule } from '@angular/forms';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { TodoComponent } from './todo.component';

export default {
  title: 'Todos/Todo Item',
  component: TodoComponent,
  parameters: {
    actions: {
      handles: ['mouseover', 'change', 'click', 'focusout'],
    },
    docs: {
      description: {
        component: 'The Angular component for displaying a Todo item',
      },
    },
  },
  argTypes: {
    todo: {
      name: 'todo',
      description: 'The todo item being displayed by this component',
      defaultValue: {
        summary: typeof undefined,
      },
    },
    editingContents: {
      name: 'editingContents',
      description:
        'An internal boolean value used by the component to determine the visibility of the input field',
      type: 'boolean',
      defaultValue: {
        summary: false,
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [FormsModule],
    }),
  ],
} as Meta<TodoComponent>;

const Template: Story<TodoComponent> = (args: TodoComponent) => ({
  props: args,
});

export const NoData = Template.bind({});
NoData.parameters = {
  docs: {
    description: {
      story: 'When todo data is **not** supplied',
    },
  },
};
NoData.args = {
  todo: undefined,
  editingContents: false,
};

export const WithData = Template.bind({});
WithData.args = {
  todo: { id: '-1', contents: 'Incomplete Item', done: false },
  editingContents: false,
};
WithData.parameters = {
  docs: {
    description: {
      story: 'When todo data **is** supplied',
    },
  },
};

export const IsDone = Template.bind({});
IsDone.args = {
  todo: { id: '-1', contents: 'Completed Item', done: true },
  editingContents: false,
};
IsDone.parameters = {
  docs: {
    description: {
      story: 'When the todo is marked completed',
    },
  },
};

export const Editing = Template.bind({});
Editing.args = {
  todo: { id: '-1', contents: 'Editing Item', done: false },
  editingContents: true,
};
Editing.parameters = {
  docs: {
    description: {
      story: 'When the todo contents are being edited',
    },
  },
};

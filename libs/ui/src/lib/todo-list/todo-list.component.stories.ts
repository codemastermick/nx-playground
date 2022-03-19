import { FormsModule } from '@angular/forms';
import { Todo } from '@playground/todos';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { UiModule } from '../ui.module';
import { TodoListComponent } from './todo-list.component';

export default {
  title: 'Todos/Todo List',
  component: TodoListComponent,
  parameters: {
    actions: {
      handles: ['change', 'click', 'focusout'],
    },
    docs: {
      description: {
        component: 'The Angular component for displaying a list of Todo items',
      },
    },
  },
  argTypes: {
    todos: {
      name: 'todos',
      description: 'The list of todo items being displayed by this component',
      defaultValue: {
        summary: 'Todo[]',
        detail: 'An array of Todo items',
      },
    },
    hideCompleted: {
      name: 'hideCompleted',
      description: 'Whether to show completed items or not',
      defaultValue: {
        summary: false,
      },
      type: {
        name: 'boolean',
        required: false,
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [FormsModule, UiModule],
    }),
  ],
} as Meta<TodoListComponent>;

const Template: Story<TodoListComponent> = (args: TodoListComponent) => ({
  props: args,
});

const emptyList: Todo[] = [];
const dummyList: Todo[] = [];
for (let i = 0; i < 10; i++) {
  dummyList.push({
    id: i.toString(),
    contents: `I am todo item ${i}`,
    done: false,
  });
}
const someDone: Todo[] = [];
for (let i = 0; i < 10; i++) {
  someDone.push({
    id: i.toString(),
    contents: `I am todo item ${i}`,
    done: i % 3 === 0,
  });
}

export const NoTodos = Template.bind({});
NoTodos.parameters = {
  docs: {
    description: {
      story: 'When an array of Todo data is not supplied',
    },
  },
};
NoTodos.args = {
  todos: [],
  hideCompleted: false,
};

export const Simple = Template.bind({});
Simple.parameters = {
  docs: {
    description: {
      story: 'When an array of Todo data is supplied',
    },
  },
};
Simple.args = {
  todos: dummyList,
  hideCompleted: false,
};

export const SomeComplete = Template.bind({});
SomeComplete.parameters = {
  docs: {
    description: {
      story: 'When marking completed items as hidden',
    },
  },
};
SomeComplete.args = {
  todos: someDone,
  hideCompleted: true,
};

import { Todo } from '@playground/todos';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { UiModule } from '../ui.module';
import { TodoListComponent } from './todo-list.component';

export default {
  title: 'TodoListComponent',
  component: TodoListComponent,
  parameters: {
    actions: {
      handles: ['change', 'click', 'focusout'],
    },
  },
  decorators: [
    moduleMetadata({
      imports: [UiModule],
    }),
  ],
} as Meta<TodoListComponent>;

const Template: Story<TodoListComponent> = (args: TodoListComponent) => ({
  props: args,
});

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
NoTodos.args = {};
export const Simple = Template.bind({});
Simple.args = {
  todos: dummyList,
  hideCompleted: false,
};
export const SomeComplete = Template.bind({});
SomeComplete.args = {
  todos: someDone,
  hideCompleted: true,
};

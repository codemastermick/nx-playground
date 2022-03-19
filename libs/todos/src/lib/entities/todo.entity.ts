export class Todo {
  id: string;
  contents: string;
  done: boolean;

  constructor(id: string, contents: string, done: boolean) {
    this.id = id;
    this.contents = contents;
    this.done = done;
  }
}

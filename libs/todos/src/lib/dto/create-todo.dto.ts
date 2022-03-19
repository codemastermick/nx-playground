export class CreateTodoDto {
  contents: string;

  constructor(contents: string) {
    this.contents = contents;
  }
}

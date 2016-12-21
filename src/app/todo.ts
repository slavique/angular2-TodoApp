export class Todo {
  title: string;
  margin: string;

  constructor(title: string, marginTop: number,  marginLeft: number) {
    this.title = title;
    this.margin = marginTop + 'em 0em 0em ' + marginLeft + 'em';
  }
}

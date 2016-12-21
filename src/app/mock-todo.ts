import {Todo} from "./todo";

export const TODOS: Todo[] = [
  //{ title: "Wash dishes", margin: '2em 0em 0em 10em' },
  //{ title: "Walk the dog", margin: '5em 0em 0em 50em' },
  //{ title: "Make homework", margin: '20em 0em 0em 30em' },
  //{ title: "Buy food", margin: '15em 0em 0em 15em'}


  new Todo("Wash dishes", 5, 10),
  new Todo("Walk the dog", 3, 25),
  new Todo("Get homework done", 25, 6),
  new Todo("Buy food", 15, 30)
];

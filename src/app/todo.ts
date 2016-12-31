export class Todo {
  title: string;
  marginTop: number;
  marginLeft: number;
  date: string;
  time: string;
  dateObj : Date;
  margin: string;
  isDeadlineClose: boolean;
  isDeadlineHere: boolean;
  isEyesDisturbed: boolean;
  isEyesAngry: boolean;
  isMouthDisturbed: boolean;
  isMouthAngry: boolean;

  constructor(title: string, marginTop: number,  marginLeft: number, date: string, time: string) {
    this.title = title;
    this.marginTop = marginTop;
    this.marginLeft = marginLeft;
    this.date = date;
    this.time = time;
    this.dateObj = (date && time) ? this.getDate(date, time) : new Date();
    this.margin = marginTop + '% 0% 0% ' + marginLeft + '%';
  }

  getDate(date, time) : Date {
    let arrDate = date.split("-");
    arrDate[1] -= 1;
    let arrTime = time.split(":");
    let dateArray = arrDate.concat(arrTime);
    //console.log('dateArray: ' + dateArray);
    return new Date(dateArray[0], dateArray[1], dateArray[2], dateArray[3], dateArray[4])
  }
}

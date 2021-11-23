export class ToDoEntry {
  static counter: number = 1;
  id: number;
  fname: string;
  lname: string;
  uname: string;
  pwd: string;
  discription: string;
  done: boolean;
  date: Date;

  constructor(fname: string, lname: string, uname: string, pwd: string, discription: string) {
    this.id = ToDoEntry.counter++;
    this.fname = fname;
    this.lname = lname;
    this.uname = uname;
    this.pwd = pwd;
    this. discription = discription;
    this.done = false;
    this.date = new Date();
  }

  changeStatus(value: boolean) {
    this.done = value;
  }
}

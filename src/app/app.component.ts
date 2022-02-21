import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myDemo';

  student: Student = new Student(0,"","");
  list: Student[] = [
    {id: 1, name: 'Toan', img: 'https://emoi.vn/wp-content/uploads/2021/02/cach-tao-dang-chup-hinh-dep.jpg'},
    {
      id: 2,
      name: 'Toan2',
      img: 'https://cdn.nguyenkimmall.com/images/companies/_1/tin-tuc/kinh-nghiem-meo-hay/Ch%E1%BB%A5p%20%E1%BA%A3nh/cach-tao-dang-chup-hinh-dep-7-1.jpg'
    },
  ]

  create(): void {
    let check = true;
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].id === this.student.id) {
        this.list[i].name = this.student.name;
        this.list[i].img = this.student.img;
        check = false;
      }
    }
    if (check) {
      this.list.push(new Student(this.student.id,this.student.name,this.student.img));
    }
  }

  showEdit(student: Student): void {
    this.student = new Student(student.id,student.name,student.img)
  }

  delete(id: number): void {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].id === id) {
        this.list.splice(i, 1);
      }
    }
  }
}

class Student {
  id: number = 0;
  name: string = '';
  img: string = '';

  constructor(id: number, name: string, img: string) {
    this.id = id;
    this.name = name;
    this.img = img;
  }
}


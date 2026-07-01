import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  title = 'my-app';
  sayHello() {
    alert('hello from App Component');
    console.log('hello from App Component');
  }
  name = 'Lê Quốc Hảo';
  age = '20';
  handleClick() {
    alert('Bạn đã click button');
  }
  delete() {
    alert('ban da xoa');
  }
}

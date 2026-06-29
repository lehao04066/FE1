import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
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
}

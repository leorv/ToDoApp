import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: any[] = []; // []
  public title: string = 'Minhas tarefas'
  /**
   *
   */
  constructor() {
    this.todos.push('passear com o cachorro');
    this.todos.push('estudar angular');
    this.todos.push('jogar mir4');
  }

  alteraTexto(){
    this.title = 'Teste';
  }
}
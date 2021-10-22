import { Todo } from './../models/todo.model';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo[] = []; // []
  public title: string = 'Minhas tarefas';
  public form: FormGroup;
  /**
   *
   */
  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(4),
        Validators.maxLength(48),
        Validators.required,
      ])]
    })
  }

  alteraTexto(){
    this.title = 'Teste';
  }

  clear(){
    this.form.reset();
  }

  add(){
    const title = this.form.controls['title'].value;
    var id: number;
    if (this.todos.length == 0){
      id = 1;
    }
    else{
      id = this.todos[this.todos.length -1].id +1;
    }
    this.clear();
    

    this.todos.push(new Todo(id, title, false));
  }



  remove(todo: Todo){
    const index = this.todos.indexOf(todo);
    if (index !== -1){
      this.todos.splice(index,1);
    }
  }
  markAsDone(todo: Todo){
    todo.done = true;
  }
  markAsUndone(todo: Todo){
    todo.done = false;
  }
}
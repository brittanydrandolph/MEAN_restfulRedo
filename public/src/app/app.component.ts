import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Restful Tasks';
  tasks = [];
  task = "";
  //green = false;
  newTask : any;
  editTask: any;
  editTog = false; 
  selectedTask;

  constructor(private _httpService: HttpService){}
  ngOnInit(){
    //this.getTasksFromService()
    this.newTask = {title: "", description: ""}
  }
  getTasksFromService() {
    let obs = this._httpService.getTasks();
    obs.subscribe(data => {
      console.log("This is the data from the component", data)
      this.tasks = data["info"]
    });
  }
  show(idx){
    this.selectedTask = this.tasks[idx];
    //this.green = true;
  }
  onSubmit(){
    let obs = this._httpService.addTask(this.newTask);
    obs.subscribe(data => {
      console.log("The new task created is:", data)
      this.newTask = {title: "", description: ""}
      this.getTasksFromService();
    })
  }
  editForm(task){
    this.editTask = {_id: task._id, title: task.title, description: task.description}
    this.editTog = true;
  }
  onSubmitEdit(){
    let obs = this._httpService.editTask(this.editTask);
    obs.subscribe(data => {
      console.log("You successfully made an edit!")
      this.editTog = false;
      this.getTasksFromService();
    }) 
  }
  delete(task){
    let obs = this._httpService.deleteTask(task);
    obs.subscribe(data => {
      console.log("You have successfully deleted a task!")
      this.getTasksFromService();
    })
  }
}


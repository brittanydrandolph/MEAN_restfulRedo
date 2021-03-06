import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
    //this.getTasks();
  }
  getTasks(){
    return this._http.get('/tasks');
  }
  addTask(newTask){
    return this._http.post('/tasks', newTask);
  }
  editTask(editTask){
    return this._http.put(`/tasks/${editTask._id}`, editTask)
  }
  deleteTask(task){
    return this._http.delete(`/tasks/${task._id}`, task);
  }
}
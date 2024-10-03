import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  tasksList: any  = [];
  httpClient = inject(HttpClient);
  constructor() { }

  addTask(task:string){
    return this.httpClient.post("http://localhost:4200/assets/data.json",{
      title:task
    })
  }
  getAllTasks(){
     return this.httpClient.get("http://localhost:4200/assets/data.json");
  }
  updateTask(task:any){
    return this.httpClient.put("http://localhost:4200/assets/data.json"+task.id,task)
  }
}

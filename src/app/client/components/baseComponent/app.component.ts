import { Component,OnInit} from '@angular/core';
import {User} from './user.interface';
import { Router } from "@angular/router";
import {Http,Headers,Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'app works!';
  public user: User;
  public test: User;

  constructor(private http:Http,private router:Router)
  {
  console.log("http service and Router initialized");
  }

  ngOnInit()
 {
this.user={
  name:'',
  password:''
}
this.test={
  name:'',
  password:''
}
 }

  save(User)
  {
    var headers=new Headers();
    headers.append('Content-Type','application/json');
 this.http.post("http://localhost:3000/save",JSON.stringify(User),{headers:headers}).map((res: Response) => res.json()).subscribe((res:any)=>{
   this.test=res;
   console.log("from node server::::::::"+JSON.stringify(this.test));
  this.router.navigateByUrl('/welcomepage');
 });
  }
}

import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'observables';

  data:any[]=[]



  //Observable
  myObservable=new Observable((observer)=>{
    setTimeout(() => { observer.next(1) }, 1000);
    setTimeout(() => { observer.next(2) }, 2000);
    setTimeout(() => { observer.next(3) }, 3000);
    setTimeout(() => { observer.next(4) }, 4000);
    setTimeout(() => { observer.next(5) }, 5000);
    setTimeout(() => { observer.next(6) }, 6000);
    // setTimeout(() => { observer.error(new Error('This is error')) }, 7000);
    setTimeout(() => { observer.next(7) }, 7000);
    setTimeout(() => { observer.next(8) }, 8000);
    setTimeout(() => { observer.next(9) }, 9000);
    setTimeout(() => { observer.next(10) }, 10000);
    setTimeout(() => { observer.complete() }, 11000);
  })




  getAsncData(){
    //Observer
    //next,error,complete
  //   this.myObservable.subscribe((val:any)=>{
  //     this.data.push(val);

  //   },
  //   (err)=>{
  //     alert(err)

  //   },
  //   ()=>{
  //     alert('all data has been emited')
  //   }
  // );

  this.myObservable.subscribe({
    next:(value:any)=>{
      this.data.push(value)
    },
    error(err){
      alert(err)
    },
    complete(){
      alert('all the data has been streamed')
    }
  })




  }



}

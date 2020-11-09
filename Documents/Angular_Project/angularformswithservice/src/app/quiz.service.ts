import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Answer } from './model.answers';
import { Quiz } from './model.quiz';

@Injectable({
  providedIn: 'root'    
})
export class QuizService {
  /*loadQuiz() {
    throw new Error('Method not implemented.');
  }*/

  score: number = 0;
  constructor(private httpClient:HttpClient) { }    //DI for HttpClient 


  loadQuiz():Observable<Quiz[]>{
    return this.httpClient.get<Quiz[]>("http://localhost:3000/quiz");
  }

  quizScore(data:number){
      this.score = data;
  }
}
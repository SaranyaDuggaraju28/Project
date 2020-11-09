import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
//import { Answer } from '../model.answers';
import { Quiz } from '../model.quiz';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  qanda:Quiz[];
  answer:number[];
  start:number = 0;
  score:number = 0;
  option: Array<String> = [];
  form = new FormGroup({ans: new FormControl()});
  flag:boolean = false;

  constructor(private quizService:QuizService) { }

  ngOnInit(): void {
  }

  loadQuiz(): void {
    this.flag = true;
    this.quizService.loadQuiz().subscribe(data=>this.qanda=data);
  }

  next(): void{
    this.option.push(this.form.get('ans').value);
    for(let i = this.qanda[this.start].qid - 1; i< this.qanda[this.start].qid; i++){
      if(String(this.option[i]) == String(this.qanda[i].answer)){
        this.score++;
      }
  }
    this.start++;

  }

  prev():void{
    this.start--;
  }

  submit(): void{
    this.score = (this.score / this.qanda.length)*100;
    console.log("The score is: "+this.score);
    for(var i=0; i<this.qanda.length; i++){
      console.log("Answers: "+this.qanda[i].answer);
    }
    
  }
}

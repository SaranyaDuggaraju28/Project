import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplaterefComponent } from './templateref/templateref.component';
import { TdformComponent } from './tdform/tdform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdformComponent } from './mdform/mdform.component';
import { FakeComponent } from './fake/fake.component';
import { HttpClientModule } from '@angular/common/http';
import { FakeService2 } from './fake.service2';
import { ProductComponent } from './product/product.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizService } from './quiz.service';

@NgModule({
  declarations: [
    AppComponent,
    TemplaterefComponent,
    TdformComponent,
    MdformComponent,
    FakeComponent,
    ProductComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [FakeService2,QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }

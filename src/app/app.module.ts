import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodoListComponent } from './todo-list/todo-list.component';

import {TodoService} from "./todo.service";
import {AppRoutingModule} from "./app-routing.module";
import { MotivatingDudeComponent } from './motivating-dude/motivating-dude.component';
import { BodyComponent } from './motivating-dude/body/body.component';
import { EyesComponent } from './motivating-dude/eyes/eyes.component';
import { MouthComponent } from './motivating-dude/mouth/mouth.component';
import { ShirtComponent } from './motivating-dude/shirt/shirt.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TodoListComponent,
    MotivatingDudeComponent,
    BodyComponent,
    EyesComponent,
    MouthComponent,
    ShirtComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot()
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

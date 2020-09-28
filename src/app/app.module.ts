import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDosComponent } from './components/to-dos/to-dos.component';
import { ToDoItemComponent } from './components/to-do-item/to-do-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddToDoComponent } from './components/add-to-do/add-to-do.component';
import { AboutComponent } from './components/pages/about/about.component';

@NgModule({
  //Add Components here
  declarations: [AppComponent, ToDosComponent, ToDoItemComponent, HeaderComponent, AddToDoComponent, AboutComponent],
  //Add modules here
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

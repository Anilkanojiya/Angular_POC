import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { WellListComponent } from './well-list/well-list.component';
import { AddWellComponent } from './add-well/add-well.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { CreateCompService } from './create-comp.service';
import { AppDisplayDirective } from './app-display.directive';


const Routes : Routes = [
  { path:'', component: UserdetailsComponent },
  { path:'well-list', component: WellListComponent },
  { path:'drag-drop', component: DragDropComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    UserdetailsComponent,
    WellListComponent,
    AddWellComponent,
    DragDropComponent,
    AppDisplayDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(Routes),
    BrowserAnimationsModule,
    MatSlideToggleModule,
    FormsModule,
    
  ],
  providers: [CreateCompService],
  bootstrap: [AppComponent]
})
export class AppModule { }

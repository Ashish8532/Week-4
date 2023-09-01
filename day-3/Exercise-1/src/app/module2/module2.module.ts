import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component2Component } from './component2/component2.component';



@NgModule({
  declarations: [
    Component2Component
  ],
  imports: [
    CommonModule
  ]
})
export class Module2Module {
  constructor() {
    console.log('Module 2 loaded.');
  }
 }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component1Component } from './component1/component1.component';



@NgModule({
  declarations: [
    Component1Component
  ],
  imports: [
    CommonModule
  ]
})
export class Module1Module {
  constructor() {
    console.log('Module 1 loaded.');
  }
 }

import { Component, InputSignal, input, OnInit } from '@angular/core';
import { Case } from '../../models/case';

@Component({
  selector: 'app-case',
  imports: [],
  templateUrl: './case.component.html',
  styleUrl: './case.component.css'
})
export class CaseComponent {
  case_props: InputSignal<Case> = input.required()


  ngOnInit() {

  }

  case_clicked() {
    console.log("case_clicked")
    
  }

}

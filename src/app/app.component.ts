import { Component, OnInit, signal } from '@angular/core';
import { CaseComponent } from './components/case/case.component';
import { Case } from './models/case';
import { CASES } from './mock/mock_case';
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { LoginFormComponent } from "./components/login-form/login-form.component";

@Component({
  selector: 'app-root',
  imports: [CaseComponent, SearchBarComponent, LoginFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  username = signal('')
  
  cases : Array<Case> = CASES
  count: number = 0
  search: string = ''
  case_click1: boolean = false

  increaseCount() {
    this.count++
  }
  
  ngOnInit() {
    
  }
}

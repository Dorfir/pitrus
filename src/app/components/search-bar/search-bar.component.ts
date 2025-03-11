import { FormsModule } from '@angular/forms';
import { Component, EventEmitter, Output, Input, model } from '@angular/core';


@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  @Output() searchButtonClicked = new EventEmitter()
  @Output() searchChange = new EventEmitter<string>()

  @Input() search = 'Initial'

  updateSearch(value: string) {
    this.searchChange.emit(value)
  }

  button_click() {
    this.searchButtonClicked.emit()
  }

}

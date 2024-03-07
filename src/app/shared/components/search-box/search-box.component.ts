import { Component, EventEmitter, Input, Output, input } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  @Input() placeholder: string = ''

  @Output()
  public onValue = new EventEmitter<string>()

  emitValue(value: string) {
    this.onValue.emit(value)
  }

}

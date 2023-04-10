import { Component } from '@angular/core';
import { Dropdown, DropdownOption } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  get dropdownValue() {
    return this.getOptionById(this.selectedId)?.value;
  }

  dropdownOptions: Dropdown = [
    { id: 1, value: 11, label: 'Option 1' },
    { id: 2, value: 22, label: 'Option 2' },
    { id: 3, value: 33, label: 'Option 3' },
    { id: 4, value: 44, label: 'Option 4' },
    { id: 5, value: 55, label: 'Option 5' },
    { id: 6, value: 66, label: 'Option 6' },
    { id: 7, value: 77, label: 'Option 7' },
    { id: 8, value: 88, label: 'Option 8' },
    { id: 9, value: 99, label: 'Option 9' }
  ];

  selectedId = 0;
  selectedIdOneWay: number = this.selectedId;

  changeselectedId(id: number): void {
    if (this.getOptionById(id) || id === 0) {
      this.selectedId = id;
    }
  }

  dropdownOutputChange(id: number): void {
    this.selectedIdOneWay = id;
  }

  private getOptionById(id: number): DropdownOption | undefined {
    return this.dropdownOptions.find(opt => opt.id === id);
  }
}

import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Dropdown } from '../types';

@Component({
  selector: 'app-dropdown-select',
  templateUrl: './dropdown-select.component.html',
  styleUrls: ['./dropdown-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownSelectComponent),
      multi: true,
    }
  ]
})
export class DropdownSelectComponent implements ControlValueAccessor {

  @Input() options: Dropdown = [];
  @Input() placeholder: string = "Select an option";
  @Input() selectedId: number = 0;

  @Output() valueChange = new EventEmitter<number>();

  public isOpen: boolean = false;
  public selectedOption: any;
  public readonly MINSCROLLELEMENTS = 7;

  selectOption(option: any, event: MouseEvent): void {
    event.stopPropagation();
    this.selectedOption = option;
    this.onChange(option.id);
    this.emitValueOneWayBinding(option.id);
    this.isOpen = false;
  }

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  private onChange: (value: number) => void = () => { };
  private onTouched: () => void = () => { };

  writeValue(id: number): void {
    this.selectedOption = this.options.find(opt => opt.id === id);
    this.emitValueOneWayBinding(id);
  }

  registerOnChange(fn: (value: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  emitValueOneWayBinding(id: number): void {
    this.valueChange.emit(id);
  }
}

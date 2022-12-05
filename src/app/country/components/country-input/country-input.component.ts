import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: ['./country-input.component.css'],
})
export class CountryInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  public debouncer: Subject<string> = new Subject();
  @Input() placeholder: string = '';
  public term: string = '';

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(300)).subscribe((termValue) => {
      this.onDebounce.emit(termValue);
    });
  }
  public search() {
    this.onEnter.emit(this.term);
    this.debouncer;
  }
  public pressKey() {
    this.debouncer.next(this.term);
  }
}

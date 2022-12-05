import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interfaces';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() countries: Country[] = [];
}

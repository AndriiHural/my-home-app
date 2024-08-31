import { Component } from '@angular/core';
import { SaveMoneyCalendarComponent } from 'src/app/modules/save-money-calendar/components/save-money-calendar/save-money-calendar.component';

@Component({
  selector: 'guilty-pleasure',
  standalone: true,
  imports: [SaveMoneyCalendarComponent],
  templateUrl: './guilty-pleasure.component.html',
  styleUrl: './guilty-pleasure.component.scss'
})
export class GuiltyPleasureComponent {

}

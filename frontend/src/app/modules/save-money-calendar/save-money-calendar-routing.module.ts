import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaveMoneyCalendarComponent } from './components/save-money-calendar/save-money-calendar.component';

const routes: Routes = [{ path: '', component: SaveMoneyCalendarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaveMoneyCalendarRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{
		path: 'save-money-calendar',
		loadChildren: () =>
			import('./modules/save-money-calendar/save-money-calendar.module').then(
				module => module.SaveMoneyCalendarModule
			),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}

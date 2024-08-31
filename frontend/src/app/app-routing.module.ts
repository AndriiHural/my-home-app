import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{
		path: 'guilty-pleasure',
		loadChildren: () =>
			import('./modules/guilty-pleasure/guilty-pleasure.routing').then(
				module => module.GuiltyPleasureRouting
			),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}

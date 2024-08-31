import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuiltyPleasureComponent } from './page/guilty-pleasure/guilty-pleasure.component';

const routes: Routes = [{ path: '', component: GuiltyPleasureComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class GuiltyPleasureRouting {}

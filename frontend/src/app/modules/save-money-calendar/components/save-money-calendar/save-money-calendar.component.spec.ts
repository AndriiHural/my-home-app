import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveMoneyCalendarComponent } from './save-money-calendar.component';

describe('SaveMoneyCalendarComponent', () => {
	let component: SaveMoneyCalendarComponent;
	let fixture: ComponentFixture<SaveMoneyCalendarComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [SaveMoneyCalendarComponent],
		});
		fixture = TestBed.createComponent(SaveMoneyCalendarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});

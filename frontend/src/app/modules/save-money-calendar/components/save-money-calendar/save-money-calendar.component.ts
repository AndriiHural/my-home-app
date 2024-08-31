import { ChangeDetectionStrategy, Component, OnInit, computed, effect, signal } from '@angular/core';
import { DateHelper } from 'src/app/shared/date/date.helper';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { SaveMoneyDB } from '../../services/save-money-db.service';
import { SaveMoneyCalenderActionService } from '../../services/save-money-calender-action/save-money-calender-action.service';

export type CalendarMonthData = Array<CalendarDay>;

export interface CalendarDay {
	id: number;
	name: number;
	amount: number;
	isRandom: boolean;
	originalAmount: number;
}

@Component({
	selector: 'save-money-calendar',
	templateUrl: './save-money-calendar.component.html',
	styleUrls: ['./save-money-calendar.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [CommonModule, MatButtonModule],
})
export class SaveMoneyCalendarComponent implements OnInit {
	public readonly today = new Date();

	public readonly bdData: CalendarMonthData[] = this.saveMoneyDB.localDB;

	public usedValues: number[] = this.bdData.map(item => item.map(day => day.amount)).flat();

	public readonly displayedMonth = signal<number>(this.today.getMonth() + 1);
	public readonly amount = computed<number>(() => this.getAmount(this.data()));
	public readonly data = computed<CalendarMonthData>(() => this.getData(this.displayedMonth()));

	constructor(private readonly saveMoneyDB: SaveMoneyDB, private readonly saveMoneyCalenderActionService:SaveMoneyCalenderActionService) {
		effect(() => {
			console.log(JSON.stringify(this.data()));
			console.log(this.data());
		});
	}

	public ngOnInit(): void {
		console.log(this.today.getMonth());
		console.log('usedValues', this.usedValues.length);
	}

	private readonly monthDays = computed(() =>
		DateHelper.getDaysOfMonth(this.today.getFullYear(), this.displayedMonth())
	);

	public onMonthChange(direction: number): void {
		this.displayedMonth.update(value => value + direction);
	}

    public onAccumulateClick():void{
        this.saveMoneyCalenderActionService.accumulate();
    }

	private getData(month: number): CalendarMonthData {
		console.log('month', month);

		const savedMouth = this.saveMoneyDB.getDataByMouth(month);

		if (savedMouth) {
			console.info('Load month data');

			return savedMouth;
		}

		console.warn('Does NOT have data in DB!');

		const newMonthData = Array.apply(null, Array(this.monthDays())).map((_value, index) => {
			const isRandom = (index + 1) % 3 === 0;
			const dayInYear = DateHelper.daysIntoYear(new Date(this.today.getFullYear(), month - 1, index + 1));

			if (isRandom) {
				const randomValue = this.getUnique(this.getRandom(), this.usedValues);

				this.usedValues.push(randomValue);

				return {
					id: dayInYear,
					name: index + 1,
					amount: randomValue,
					isRandom,
					originalAmount: dayInYear,
				};
			}

			this.usedValues.push(dayInYear);

			return {
				id: dayInYear,
				name: index + 1,
				amount: dayInYear,
				isRandom,
				originalAmount: dayInYear,
			};
		});

		this.saveMoneyDB.setNewMonth(newMonthData);

		return newMonthData;
	}

	private getAmount(data: CalendarMonthData): number {
		return data.reduce((accumulator, currentValue) => accumulator + currentValue.amount, 0);
	}

	private getRandom(min = 1, max = 365): number {
		return Math.round(Math.random() * (max - min) + min);
	}

	private getUnique(value: number, usedValues: number[], retry = 0): number {
		if (usedValues.includes(value) && retry < 365) {
			return this.getUnique(this.getRandom(), usedValues, retry++);
		}

		if (retry === 365) {
			console.error('Run random 365 times');
			return 0;
		}

		return value;
	}
}

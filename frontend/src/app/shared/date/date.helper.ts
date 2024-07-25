export abstract class DateHelper {
	/**
	 * Get days number for month
	 * @param year
	 * @param month
	 * @returns
	 */
	public static getDaysOfMonth(year: number, month: number): number {
		return new Date(year, month, 0).getDate();
	}

	public static daysIntoYear(date: Date): number {
		const day =
			(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) /
			24 /
			60 /
			60 /
			1000;

		return day;
	}
}

import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ConfirmModalData } from 'src/app/shared/modal/interfaces/confirm-modal-data.interface';
import { ModalActionService } from 'src/app/shared/modal/services/modal-action/modal-action.service';

@Injectable({
	providedIn: 'root',
})
export class SaveMoneyCalenderActionService {
	constructor(private readonly modalActionService: ModalActionService) {}

	public accumulate(): Promise<Nullable<boolean>> {
		const data: ConfirmModalData = { description: 'Was the money set aside?' };

		return firstValueFrom(this.modalActionService.confirm(data));
	}
}

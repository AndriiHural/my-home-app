import { Dialog } from '@angular/cdk/dialog';
import { Injectable } from '@angular/core';
import { ConfirmModalData } from '../../interfaces/confirm-modal-data.interface';
import { ConfirmModalComponent } from '../../components/confirm-modal/confirm-modal.component';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ModalActionService {
	constructor(private dialog: Dialog) {}

	public confirm(data: ConfirmModalData):Observable<Nullable<boolean>> {
		return this.dialog.open<boolean,ConfirmModalData>(ConfirmModalComponent, { data }).closed;
	}
}

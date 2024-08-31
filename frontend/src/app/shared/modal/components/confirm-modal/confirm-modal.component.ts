import { Component, Inject } from '@angular/core';
import{ DIALOG_DATA, DialogRef } from '@angular/cdk/dialog'
import { ConfirmModalData } from '../../interfaces/confirm-modal-data.interface';

@Component({
  selector: 'confirm-modal',
  standalone: true,
  imports: [],
  templateUrl: './confirm-modal.component.html',
  styleUrl: './confirm-modal.component.scss'
})
export class ConfirmModalComponent {
public readonly title = this.data.title || 'Are you sure?'

    constructor(
        public dialogRef: DialogRef<boolean>,
        @Inject(DIALOG_DATA) public data: ConfirmModalData,
      ) {}

    public confirm():void{
        this.dialogRef.close(true);
    }

    public cancel():void{
        this.dialogRef.close(false);
    }
}

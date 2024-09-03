import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-alert-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './alert-dialog.component.html',
  styleUrl: './alert-dialog.component.scss',
})
export class AlertDialogComponent {
  readonly data = inject<{ link: string; message: string }>(MAT_DIALOG_DATA);

  constructor(public dialogRef: MatDialogRef<AlertDialogComponent>) {}

  confirmationDialog = 'Are you sure?';

  closeDialog() {
    this.dialogRef.close();
  }
}

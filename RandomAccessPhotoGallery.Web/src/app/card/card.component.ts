import { Component, inject, Input } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCardImage, MatCardModule } from '@angular/material/card';
import { PhotoService } from '../services/photoService';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatButton,
    MatCardImage,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    DialogComponent,
    AlertDialogComponent,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() title: string = '';
  @Input() url: string = '';
  @Input() detailUrl: string = '';
  readonly dialog = inject(MatDialog);

  openImageDialog() {
    this.dialog.open(DialogComponent, {
      data: {
        title: this.title,
        url: this.url,
      },
    });
  }
  openRedirectDialog() {
    this.dialog.open(AlertDialogComponent, {
      data: {
        link: this.detailUrl,
        message: 'Are you sure you want to leave RAPG?',
      },
    });
  }

  constructor(private photoService: PhotoService) {}
}

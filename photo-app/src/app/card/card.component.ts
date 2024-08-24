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
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() title: string = '';
  imageUrl: string = '';
  readonly dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(DialogComponent, {
      data: {
        title: this.title,
        imageUrl: this.imageUrl,
      },
    });
  }

  constructor(private photoService: PhotoService) {}
}

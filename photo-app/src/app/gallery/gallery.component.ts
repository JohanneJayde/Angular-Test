import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { PhotoService } from '../services/photoService';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  constructor(private photoService: PhotoService) {}

  name: string = 'GalleryComponent';

  photos: any[] = [];

  ngOnInit() {
    this.photoService.getPhotos().subscribe((photos) => {
      this.photos = photos;
    });
  }
}

import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { PhotoService } from '../services/photoService';

@Component({
  selector: 'app-lorem-picsum',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './lorem-picsum.component.html',
  styleUrl: './lorem-picsum.component.scss',
})
export class LoremPicsumComponent {
  constructor(private photoService: PhotoService) {}

  name: string = 'GalleryComponent';

  photos: any[] = [];

  ngOnInit() {
    this.photoService.getPhotos().subscribe((photos) => {
      this.photos = photos;
      console.log(this.photos);
    });
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private http: HttpClient) {}

  getPhotos(): Observable<any> {
    return this.http.get<any>('https://picsum.photos/v2/list?page=3&limit=10');
  }

  getPhoto(): Observable<any> {
    return this.http.get<any>('https://picsum.photos/200');
  }
}

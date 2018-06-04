import { Component, OnInit } from '@angular/core';
import { GalleryItem, ImageItem } from '@ngx-gallery/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['galeria.component.scss']
})
export class GaleriaComponent implements OnInit {
    items: GalleryItem[];
  constructor() { }

  ngOnInit() {
  this.items = [
      new ImageItem('./../../assets/image/cachorro.jpg','./../../assets/image/cachorro.jpg'),
      new ImageItem('./../../assets/image/leao.jpg','./../../assets/image/leao.jpg'),
      new ImageItem('./../../assets/image/rugido.jpg','./../../assets/image/rugido.jpg'),
      new ImageItem('./../../assets/image/crianca.jpg','./../../assets/image/crianca.jpg'),
      new ImageItem('./../../assets/image/universo.jpg','./../../assets/image/universo.jpg'),
  ];
  }

}

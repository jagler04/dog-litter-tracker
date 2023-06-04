import { Component, OnInit, inject, Input } from '@angular/core';
import { Dog } from '../../services/data.service';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dog-list-item',
  templateUrl: './dog-list-item.component.html',
  styleUrls: ['./dog-list-item.component.scss'],
})
export class DogListItemComponent  implements OnInit {
  private platform = inject(Platform);
  private router = inject(Router);
  @Input() dog?: Dog;
  isIos() {
    return this.platform.is('ios')
  }
  constructor() { }

  ngOnInit() {}

  clicked(){
    this.router.navigate(["dog-info/" + this.dog?.id])
  }
}

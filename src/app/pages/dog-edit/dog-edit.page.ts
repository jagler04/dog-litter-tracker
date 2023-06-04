import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { DataService, Dog } from 'src/app/services/data.service';

@Component({
  selector: 'app-dog-edit',
  templateUrl: './dog-edit.page.html',
  styleUrls: ['./dog-edit.page.scss'],
})
export class DogEditPage implements OnInit {
  private data = inject(DataService);
  private activatedRoute = inject(ActivatedRoute);
  private platform = inject(Platform);

  public dog: Dog | undefined;

  constructor() { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.dog = this.data.getDog(id);
  }

}

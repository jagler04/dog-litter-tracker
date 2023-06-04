import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { DataService, Dog } from 'src/app/services/data.service';

@Component({
  selector: 'app-dog-info',
  templateUrl: './dog-info.page.html',
  styleUrls: ['./dog-info.page.scss'],
})
export class DogInfoPage implements OnInit {
  private data = inject(DataService);
  private activatedRoute = inject(ActivatedRoute);
  private platform = inject(Platform);
  private router = inject(Router);

  public dog: Dog | undefined;
  constructor() { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.dog = this.data.getDog(id);
  }
  editClicked(){
    this.router.navigate(["dog-edit/" + this.dog?.id])
  }
}

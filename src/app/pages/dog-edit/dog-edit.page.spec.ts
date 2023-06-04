import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DogEditPage } from './dog-edit.page';

describe('DogEditPage', () => {
  let component: DogEditPage;
  let fixture: ComponentFixture<DogEditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DogEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

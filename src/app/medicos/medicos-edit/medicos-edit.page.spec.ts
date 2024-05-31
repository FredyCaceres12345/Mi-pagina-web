import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MedicosEditPage } from './medicos-edit.page';

describe('MedicosEditPage', () => {
  let component: MedicosEditPage;
  let fixture: ComponentFixture<MedicosEditPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicosEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

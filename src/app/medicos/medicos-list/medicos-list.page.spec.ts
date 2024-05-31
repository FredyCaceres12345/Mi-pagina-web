import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MedicosListPage } from './medicos-list.page';

describe('MedicosListPage', () => {
  let component: MedicosListPage;
  let fixture: ComponentFixture<MedicosListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicosListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

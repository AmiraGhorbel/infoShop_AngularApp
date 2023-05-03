import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteAuPanierComponent } from './ajoute-au-panier.component';

describe('AjouteAuPanierComponent', () => {
  let component: AjouteAuPanierComponent;
  let fixture: ComponentFixture<AjouteAuPanierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouteAuPanierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouteAuPanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiltyPleasureComponent } from './guilty-pleasure.component';

describe('GuiltyPleasureComponent', () => {
  let component: GuiltyPleasureComponent;
  let fixture: ComponentFixture<GuiltyPleasureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuiltyPleasureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuiltyPleasureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

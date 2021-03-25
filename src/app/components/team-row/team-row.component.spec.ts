import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamRowComponent } from './team-row.component';

describe('TeamRowComponent', () => {
  let component: TeamRowComponent;
  let fixture: ComponentFixture<TeamRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

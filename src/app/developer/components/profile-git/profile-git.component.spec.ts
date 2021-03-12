import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileGitComponent } from './profile-git.component';

describe('ProfileGitComponent', () => {
  let component: ProfileGitComponent;
  let fixture: ComponentFixture<ProfileGitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileGitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileGitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

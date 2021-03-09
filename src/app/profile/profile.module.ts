import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileHeaderComponent } from './components/profile-header/profile-header.component';
import { ProfileAboutComponent } from './components/profile-about/profile-about.component';
import { ProfileGithubComponent } from './components/profile-github/profile-github.component';
import { ProfileCredsComponent } from './components/profile-creds/profile-creds.component';
import { AddExpComponent } from './components/add-exp/add-exp.component';
import { AddEduComponent } from './components/add-edu/add-edu.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule
  ],
  declarations: [ProfileHeaderComponent, ProfileAboutComponent, ProfileGithubComponent, ProfileCredsComponent, AddExpComponent, AddEduComponent]
})
export class ProfileModule { }

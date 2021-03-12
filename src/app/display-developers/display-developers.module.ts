import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DisplayDevelopersRoutingModule } from "./display-developers-routing.module";
import { ProfilesComponent } from "./components/profiles/profiles.component";
import { ProfileCardComponent } from "./components/profile-card/profile-card.component";
import { DeveloperDisplayService } from "./services/developer-display.service";

@NgModule({
  imports: [CommonModule, DisplayDevelopersRoutingModule],
  declarations: [ProfilesComponent, ProfileCardComponent],
  providers: [DeveloperDisplayService],
})
export class DisplayDevelopersModule {}

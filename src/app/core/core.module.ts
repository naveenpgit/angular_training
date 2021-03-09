import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CoreRoutingModule } from "./core-routing.module";
import { HeaderComponent } from "./components/layout/header/header.component";
import { FooterComponent } from "./components/layout/footer/footer.component";
import { LandingComponent } from "./components/layout/landing/landing.component";
import { HttpModule } from "@angular/http";
@NgModule({
  imports: [CommonModule, HttpModule, CoreRoutingModule],
  declarations: [HeaderComponent, FooterComponent, LandingComponent],
  exports: [HeaderComponent, FooterComponent, LandingComponent],
})
export class CoreModule {}

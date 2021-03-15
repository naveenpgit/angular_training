import { AuthGuards } from "./guards/auth.guards";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CoreRoutingModule } from "./core-routing.module";
import { HeaderComponent } from "./components/layout/header/header.component";
import { FooterComponent } from "./components/layout/footer/footer.component";
import { LandingComponent } from "./components/layout/landing/landing.component";
import { HttpModule } from "@angular/http";
import { SharedService } from "./services/shared.service";
import { HighlightDirective } from "./components/directives/highlight.directive";
@NgModule({
  imports: [CommonModule, HttpModule, CoreRoutingModule],
  declarations: [
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    HighlightDirective,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    HighlightDirective,
  ],
  providers: [AuthGuards, SharedService],
})
export class CoreModule {}

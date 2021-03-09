import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { FormsModule } from "@angular/forms";
import { AuthService } from "./services/auth.service";
import { HttpModule } from "@angular/http";
@NgModule({
  imports: [CommonModule, FormsModule, HttpModule, AuthRoutingModule],
  declarations: [LoginComponent, RegisterComponent],
  providers: [AuthService],
})
export class AuthModule {}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { appRouter } from "./app.router";
import { CoreModule } from "./core/core.module";
import { httpInterceptors } from "./core/interceptors";
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, HttpClientModule, appRouter],
  providers: [httpInterceptors],
  bootstrap: [AppComponent],
})
export class AppModule {}

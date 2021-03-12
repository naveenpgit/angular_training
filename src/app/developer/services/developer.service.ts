import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class DeveloperService {
  api = "api/profile/user/";
  constructor(private httpCl: HttpClient) {}

  getProfileDetails(id: string) {
    return this.httpCl.get(this.api + id);
  }
}

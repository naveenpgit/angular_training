import { Injectable } from "@angular/core";
import { ProfileCrudService } from "../../profile/services/profile-crud.service";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class DeveloperDisplayService {
  api = "/api/profile/all";
  constructor(private httpClient: HttpClient) {}

  getAllProfiles(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.api);
  }
}

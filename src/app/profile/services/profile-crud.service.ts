import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
  Education,
  Experience,
  ProfileFormData,
} from "../models/profile-form-data";

@Injectable()
export class ProfileCrudService {
  constructor(private http: HttpClient) {}

  createProfile(profileData: ProfileFormData) {
    return this.http.post("/api/profile", profileData);
  }
  getMyProfile() {
    return this.http.get("/api/profile/");
  }

  addEducation(education: Education) {
    return this.http.post("/api/profile/education", education);
  }

  addExperience(experience: Experience) {
    return this.http.post("/api/profile/experience", experience);
  }
  getAllProfiles() {
    return this.http.get("/api/profile");
  }

  getProfileById(id: string) {
    return this.http.get("/api/profile/user/" + id);
  }
}

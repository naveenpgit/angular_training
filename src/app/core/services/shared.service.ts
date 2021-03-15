import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedService {
subject: BehaviorSubject<string>= new BehaviorSubject<string>("");
  constructor() { }

}

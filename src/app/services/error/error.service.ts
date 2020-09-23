import { Injectable } from '@angular/core';
import { ErrorData } from '../../models/error-data/error-data.module';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  public displayError(error: ErrorData): void {
    alert(error.message);
  }

}

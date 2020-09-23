import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs/operators';
import { ErrorData } from 'src/app/models/error-data/error-data.module';
import { ErrorService } from 'src/app/services/error/error.service';
import * as countActions from '../actions/contador.actions';

@Injectable()
export class countEffects{
    
    constructor(private ErrorService: ErrorService,
                private readonly actions$: Actions){}

    // @Effect({ dispatch: false })
    // public fetchProductsFail$ = this.actions$.pipe(
    //     ofType<countActions.IncrementCountFail>(countActions.countActions.incFail),
    //     map((action: countActions.IncrementCountFail) => action.payload),
    //     tap((error: ErrorData) => this.ErrorService.displayError(error)),
    // );

 

}
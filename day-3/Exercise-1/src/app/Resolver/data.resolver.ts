import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../Service/data.service';

export const dataResolver: ResolveFn<boolean> = (route, state): Observable<any> => {
  const dataService = inject(DataService);
  return dataService.getData();
};

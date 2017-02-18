import { Injectable }     	from '@angular/core';
import { Http, Response } 	from '@angular/http';
import { Observable } 		from 'rxjs';

import { Planet }           from './planet/planet';

@Injectable()
export class PlanetSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Planet[]> {
    return this.http
               .get(`app/planets/?name=${term}`)
               .map((r: Response) => r.json().data as Planet[]);
  }
}
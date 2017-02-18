import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { PlanetSearchService } from './planet-search.service';
import { Planet } from './planet/planet';

@Component({
  moduleId: module.id,
  selector: 'planet-search',
  templateUrl: 'planet-search.component.html',
  styleUrls: [ 'planet-search.component.css' ],
  providers: [PlanetSearchService]
})

export class PlanetSearchComponent implements OnInit {

  planets: Observable<Planet[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private planetSearchService: PlanetSearchService,
    private router: Router
    ) {}

  // Push a search term into the observable stream
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.planets = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term ? this.planetSearchService.search(term) : Observable.of<Planet[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<Planet[]>([]);
      });
  }

  gotoDetail(planet: Planet): void {
    let link = ['/detail', planet.id];
    this.router.navigate(link);
  }
}
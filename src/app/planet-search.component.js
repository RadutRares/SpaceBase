"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var Observable_1 = require('rxjs/Observable');
var Subject_1 = require('rxjs/Subject');
var planet_search_service_1 = require('./planet-search.service');
var PlanetSearchComponent = (function () {
    function PlanetSearchComponent(planetSearchService, router) {
        this.planetSearchService = planetSearchService;
        this.router = router;
        this.searchTerms = new Subject_1.Subject();
    }
    // Push a search term into the observable stream
    PlanetSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    PlanetSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.planets = this.searchTerms
            .debounceTime(300) // wait for 300ms pause in events
            .distinctUntilChanged() // ignore if next search term is same as previous
            .switchMap(function (term) { return term ? _this.planetSearchService.search(term) : Observable_1.Observable.of([]); })
            .catch(function (error) {
            // TODO: real error handling
            console.log(error);
            return Observable_1.Observable.of([]);
        });
    };
    PlanetSearchComponent.prototype.gotoDetail = function (planet) {
        var link = ['/detail', planet.id];
        this.router.navigate(link);
    };
    PlanetSearchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'planet-search',
            templateUrl: 'planet-search.component.html',
            styleUrls: ['planet-search.component.css'],
            providers: [planet_search_service_1.PlanetSearchService]
        }), 
        __metadata('design:paramtypes', [planet_search_service_1.PlanetSearchService, router_1.Router])
    ], PlanetSearchComponent);
    return PlanetSearchComponent;
}());
exports.PlanetSearchComponent = PlanetSearchComponent;
//# sourceMappingURL=planet-search.component.js.map
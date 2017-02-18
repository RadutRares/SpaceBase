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
// Keep the Input import for now, we'll remove it later:
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var planet_service_1 = require('./planet.service');
require('rxjs/add/operator/switchMap');
var PlanetDetailComponent = (function () {
    function PlanetDetailComponent(planetService, route, location) {
        this.planetService = planetService;
        this.route = route;
        this.location = location;
    }
    PlanetDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.planetService.getPlanet(+params['id']); })
            .subscribe(function (planet) { return _this.planet = planet; });
    };
    PlanetDetailComponent.prototype.addExtension = function () {
        this.planet.description += " " + this.stringExtension;
    };
    PlanetDetailComponent.prototype.save = function () {
        var _this = this;
        this.planetService.update(this.planet)
            .then(function () { return _this.goBack(); });
    };
    PlanetDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    PlanetDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'planet-detail',
            templateUrl: 'planet-detail.component.html',
            styleUrls: ['planet-detail.component.css'],
        }), 
        __metadata('design:paramtypes', [planet_service_1.PlanetService, router_1.ActivatedRoute, common_1.Location])
    ], PlanetDetailComponent);
    return PlanetDetailComponent;
}());
exports.PlanetDetailComponent = PlanetDetailComponent;
//# sourceMappingURL=planet-detail.component.js.map
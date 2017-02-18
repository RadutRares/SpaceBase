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
var planet_service_1 = require('./planet.service');
var PlanetComponent = (function () {
    function PlanetComponent(planetService, router) {
        this.planetService = planetService;
        this.router = router;
    }
    PlanetComponent.prototype.onSelect = function (planet) {
        this.selectedPlanet = planet;
    };
    PlanetComponent.prototype.ngOnInit = function () {
        this.getPlanets();
    };
    PlanetComponent.prototype.getPlanets = function () {
        var _this = this;
        this.planetService.getPlanets().then(function (planets) { return _this.planets = planets; });
    };
    PlanetComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.planetService.create(name)
            .then(function (planet) {
            _this.planets.push(planet);
            _this.selectedPlanet = null;
        });
    };
    PlanetComponent.prototype.delete = function (planet) {
        var _this = this;
        this.planetService
            .delete(planet.id)
            .then(function () {
            _this.planets = _this.planets.filter(function (p) { return p !== planet; });
            if (_this.selectedPlanet === planet) {
                _this.selectedPlanet = null;
            }
        });
    };
    PlanetComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedPlanet.id]);
    };
    PlanetComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'planet',
            templateUrl: './planet.component.html',
            styleUrls: ['./planet.component.css'],
            providers: [planet_service_1.PlanetService]
        }), 
        __metadata('design:paramtypes', [planet_service_1.PlanetService, router_1.Router])
    ], PlanetComponent);
    return PlanetComponent;
}());
exports.PlanetComponent = PlanetComponent;
//# sourceMappingURL=planet.component.js.map
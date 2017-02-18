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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var PlanetService = (function () {
    function PlanetService(http) {
        this.http = http;
        this.planetsUrl = 'api/planets';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    PlanetService.prototype.getPlanets = function () {
        return this.http.get(this.planetsUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    PlanetService.prototype.getPlanet = function (id) {
        var url = this.planetsUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    PlanetService.prototype.update = function (planet) {
        var url = this.planetsUrl + "/" + planet.id;
        return this.http
            .put(url, JSON.stringify(planet), { headers: this.headers })
            .toPromise()
            .then(function () { return planet; })
            .catch(this.handleError);
    };
    PlanetService.prototype.create = function (name) {
        return this.http
            .post(this.planetsUrl, JSON.stringify({ name: name, description: "" }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    PlanetService.prototype.delete = function (id) {
        var url = this.planetsUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    PlanetService.prototype.handleError = function (error) {
        console.error('Error Occured', error);
        return Promise.reject(error.message || error);
    };
    PlanetService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PlanetService);
    return PlanetService;
}());
exports.PlanetService = PlanetService;
//# sourceMappingURL=planet.service.js.map
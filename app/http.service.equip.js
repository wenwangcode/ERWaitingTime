System.register(['angular2/http', 'angular2/core', 'rxjs/add/operator/map', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, core_1;
    var HTTPServiceE;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            HTTPServiceE = (function () {
                function HTTPServiceE(http) {
                    this.http = http;
                }
                HTTPServiceE.prototype.getEQuery = function () {
                    return this.http.get("http://www.localhost:3002/equipment").map(function (res) { return res.json(); });
                };
                HTTPServiceE = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HTTPServiceE);
                return HTTPServiceE;
            }());
            exports_1("HTTPServiceE", HTTPServiceE);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHAuc2VydmljZS5lcXVpcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUE7Z0JBQ0ksc0JBQW9CLElBQVM7b0JBQVQsU0FBSSxHQUFKLElBQUksQ0FBSztnQkFFN0IsQ0FBQztnQkFDRCxnQ0FBUyxHQUFUO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztnQkFDdkYsQ0FBQztnQkFQTDtvQkFBQyxpQkFBVSxFQUFFOztnQ0FBQTtnQkFTYixtQkFBQztZQUFELENBUkEsQUFRQyxJQUFBO1lBUkQsdUNBUUMsQ0FBQSIsImZpbGUiOiJodHRwLnNlcnZpY2UuZXF1aXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgSm95IG9uIDIwMTYtMDMtMjguXG4gKi9cbmltcG9ydCB7SHR0cH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0ICdyeGpzL1J4JztcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIVFRQU2VydmljZUV7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOkh0dHApe1xuXG4gICAgfVxuICAgIGdldEVRdWVyeSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChcImh0dHA6Ly93d3cubG9jYWxob3N0OjMwMDIvZXF1aXBtZW50XCIpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

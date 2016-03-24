System.register(['angular2/core', './patientRegister.component'], function(exports_1, context_1) {
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
    var core_1, patientRegister_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (patientRegister_component_1_1) {
                patientRegister_component_1 = patientRegister_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: '<patient></patient>',
                        directives: [patientRegister_component_1.PatientRegisterComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFlQTtnQkFBQTtnQkFFQSxDQUFDO2dCQVJEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFFBQVEsRUFBRSxxQkFBcUI7d0JBQy9CLFVBQVUsRUFBRSxDQUFDLG9EQUF3QixDQUFDO3FCQUN6QyxDQUFDOztnQ0FBQTtnQkFJRixtQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsdUNBRUMsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtWaXNpdENvbXBvbmVudH0gZnJvbSAnLi92aXNpdC5jb21wb25lbnQnO1xuaW1wb3J0IHtQYXRpZW50c0NvbXBvbmVudH0gZnJvbSAnLi9wYXRpZW50cy5jb21wb25lbnQnO1xuaW1wb3J0IHtSZWdpc3RlckNvbXBvbmVudH0gZnJvbSAnLi9yZWdpc3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHtSZXBvcnRDb21wb25lbnR9IGZyb20gJy4vcmVwb3J0LmNvbXBvbmVudCc7XG5pbXBvcnQge1BhdGllbnRSZWdpc3RlckNvbXBvbmVudH0gZnJvbSAnLi9wYXRpZW50UmVnaXN0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7Vml0YWxDb21wb25lbnR9IGZyb20gJy4vdml0YWwuY29tcG9uZW50JztcbmltcG9ydCB7Um91dGVDb25maWd9IGZyb20gXCJhbmd1bGFyMi9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiAnPHBhdGllbnQ+PC9wYXRpZW50PicsXG4gICAgZGlyZWN0aXZlczogW1BhdGllbnRSZWdpc3RlckNvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

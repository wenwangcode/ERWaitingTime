System.register(['angular2/core', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, common_1;
    var Login;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            Login = (function () {
                function Login() {
                }
                Login = __decorate([
                    core_1.Component({
                        selector: 'login',
                        directives: [common_1.FORM_DIRECTIVES, common_1.NgIf],
                        template: "\n    <body>\n    <div>Emergency Room Waiting Time is <span id=\"time\">05:00</span> minutes!</div>\n    <script>\n    function startTimer(duration, display) {\n    var timer = duration, minutes, seconds;\n    setInterval(function () {\n        minutes = parseInt(timer / 60, 10)\n        seconds = parseInt(timer % 60, 10);\n\n        minutes = minutes < 10 ? \"0\" + minutes : minutes;\n        seconds = seconds < 10 ? \"0\" + seconds : seconds;\n\n        display.textContent = minutes + \":\" + seconds;\n\n        if (--timer < 0) {\n            timer = duration;\n        }\n    }, 1000);\n}\n\nwindow.onload = function () {\n    var fiveMinutes = 60 * 5,\n        display = document.querySelector('#time');\n    startTimer(fiveMinutes, display);\n};\n    </script>\n</body>\n",
                    }), 
                    __metadata('design:paramtypes', [])
                ], Login);
                return Login;
            }());
            exports_1("Login", Login);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBMkNBO2dCQUFBO2dCQUVBLENBQUM7Z0JBckNEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLE9BQU87d0JBQ2pCLFVBQVUsRUFBRSxDQUFFLHdCQUFlLEVBQUUsYUFBSSxDQUFFO3dCQUNyQyxRQUFRLEVBQUUsaXhCQTRCYjtxQkFDQSxDQUFDOzt5QkFBQTtnQkFLRixZQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx5QkFFQyxDQUFBIiwiZmlsZSI6ImxvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IEpveSBvbiAyMDE2LTAzLTI4LlxuICovXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlciwgQ2FuQWN0aXZhdGUsIFJvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7Rk9STV9ESVJFQ1RJVkVTLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycywgQ29udHJvbEdyb3VwLCBOZ0lmfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuaW1wb3J0IHtBdXRoZW50aWNhdGlvbn0gZnJvbSAnLi9hdXRoZW50aWNhdGlvbic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbG9naW4nLFxuICAgIGRpcmVjdGl2ZXM6IFsgRk9STV9ESVJFQ1RJVkVTLCBOZ0lmIF0sXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8Ym9keT5cbiAgICA8ZGl2PkVtZXJnZW5jeSBSb29tIFdhaXRpbmcgVGltZSBpcyA8c3BhbiBpZD1cInRpbWVcIj4wNTowMDwvc3Bhbj4gbWludXRlcyE8L2Rpdj5cbiAgICA8c2NyaXB0PlxuICAgIGZ1bmN0aW9uIHN0YXJ0VGltZXIoZHVyYXRpb24sIGRpc3BsYXkpIHtcbiAgICB2YXIgdGltZXIgPSBkdXJhdGlvbiwgbWludXRlcywgc2Vjb25kcztcbiAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIG1pbnV0ZXMgPSBwYXJzZUludCh0aW1lciAvIDYwLCAxMClcbiAgICAgICAgc2Vjb25kcyA9IHBhcnNlSW50KHRpbWVyICUgNjAsIDEwKTtcblxuICAgICAgICBtaW51dGVzID0gbWludXRlcyA8IDEwID8gXCIwXCIgKyBtaW51dGVzIDogbWludXRlcztcbiAgICAgICAgc2Vjb25kcyA9IHNlY29uZHMgPCAxMCA/IFwiMFwiICsgc2Vjb25kcyA6IHNlY29uZHM7XG5cbiAgICAgICAgZGlzcGxheS50ZXh0Q29udGVudCA9IG1pbnV0ZXMgKyBcIjpcIiArIHNlY29uZHM7XG5cbiAgICAgICAgaWYgKC0tdGltZXIgPCAwKSB7XG4gICAgICAgICAgICB0aW1lciA9IGR1cmF0aW9uO1xuICAgICAgICB9XG4gICAgfSwgMTAwMCk7XG59XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGZpdmVNaW51dGVzID0gNjAgKiA1LFxuICAgICAgICBkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpbWUnKTtcbiAgICBzdGFydFRpbWVyKGZpdmVNaW51dGVzLCBkaXNwbGF5KTtcbn07XG4gICAgPC9zY3JpcHQ+XG48L2JvZHk+XG5gLFxufSlcblxuXG5leHBvcnQgY2xhc3MgTG9naW4ge1xuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

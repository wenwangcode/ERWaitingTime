/**
 * Created by joshua on 2016-04-01.
 */
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Vital;
    return {
        setters:[],
        execute: function() {
            Vital = (function () {
                function Vital(oxygen_saturatioin, temperature, blood_pressure, pulse, respiration, vid) {
                    this.oxygen_saturation = oxygen_saturatioin;
                    this.temperature = temperature;
                    this.blood_pressure = blood_pressure;
                    this.pulse = pulse;
                    this.respiration = respiration;
                    this.vid = vid;
                }
                return Vital;
            }());
            exports_1("Vital", Vital);
        }
    }
});
//# sourceMappingURL=vital.js.map
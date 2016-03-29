System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Patient;
    return {
        setters:[],
        execute: function() {
            /**
             * Created by wendywang on 2016-03-10.
             */
            Patient = (function () {
<<<<<<< HEAD
                function Patient(p_lname, p_fname, pid, is_male, dob) {
                    this.p_lname = p_lname;
                    this.p_fname = p_fname;
                    this.pid = pid;
                    this.is_male = is_male;
=======
                function Patient(gender, pname, pid, dob) {
                    this.gender = gender;
                    this.pname = pname;
                    this.pid = pid;
>>>>>>> 3f488314d31b679180ad822e64aaccf8a6942a0d
                    this.dob = dob;
                }
                return Patient;
            }());
            exports_1("Patient", Patient);
        }
    }
});

<<<<<<< HEAD
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhdGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztZQUFBOztlQUVHO1lBQ0g7Z0JBT0ksaUJBQVksT0FBZSxFQUFFLE9BQWUsRUFBRSxHQUFVLEVBQUMsT0FBYyxFQUFFLEdBQVE7b0JBQzdFLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO29CQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztvQkFDdkIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7b0JBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO2dCQUNuQixDQUFDO2dCQUNMLGNBQUM7WUFBRCxDQWRBLEFBY0MsSUFBQTtZQWRELDZCQWNDLENBQUEiLCJmaWxlIjoicGF0aWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSB3ZW5keXdhbmcgb24gMjAxNi0wMy0xMC5cbiAqL1xuZXhwb3J0IGNsYXNzIFBhdGllbnR7XG4gICAgcHJpdmF0ZSBwX2xuYW1lOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBwX2ZuYW1lOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBwaWQ6IG51bWJlcjtcbiAgICBwcml2YXRlIGlzX21hbGU6IHN0cmluZztcbiAgICBwcml2YXRlIGRvYjogRGF0ZTtcblxuICAgIGNvbnN0cnVjdG9yKHBfbG5hbWU6IHN0cmluZywgcF9mbmFtZTogc3RyaW5nLCBwaWQ6bnVtYmVyLGlzX21hbGU6c3RyaW5nLCBkb2I6RGF0ZSl7XG4gICAgICAgIHRoaXMucF9sbmFtZSA9IHBfbG5hbWU7XG4gICAgICAgIHRoaXMucF9mbmFtZSA9IHBfZm5hbWU7XG4gICAgICAgIHRoaXMucGlkID0gcGlkO1xuICAgICAgICB0aGlzLmlzX21hbGUgPSBpc19tYWxlO1xuICAgICAgICB0aGlzLmRvYiA9IGRvYjtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
=======
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhdGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztZQUFBOztlQUVHO1lBQ0g7Z0JBT0ksaUJBQVksTUFBYyxFQUFFLEtBQWEsRUFBRSxHQUFVLEVBQUUsR0FBUTtvQkFDM0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO29CQUNuQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztvQkFDZixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztnQkFDbkIsQ0FBQztnQkFDTCxjQUFDO1lBQUQsQ0FiQSxBQWFDLElBQUE7WUFiRCw2QkFhQyxDQUFBIiwiZmlsZSI6InBhdGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgd2VuZHl3YW5nIG9uIDIwMTYtMDMtMTAuXG4gKi9cbmV4cG9ydCBjbGFzcyBQYXRpZW50e1xuXG4gICAgcHJpdmF0ZSBnZW5kZXI6IHN0cmluZztcbiAgICBwcml2YXRlIHBuYW1lOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBwaWQ6IG51bWJlcjtcbiAgICBwcml2YXRlIGRvYjogRGF0ZTtcblxuICAgIGNvbnN0cnVjdG9yKGdlbmRlcjogc3RyaW5nLCBwbmFtZTogc3RyaW5nLCBwaWQ6bnVtYmVyLCBkb2I6RGF0ZSl7XG4gICAgICAgIHRoaXMuZ2VuZGVyID0gZ2VuZGVyO1xuICAgICAgICB0aGlzLnBuYW1lID0gcG5hbWU7XG4gICAgICAgIHRoaXMucGlkID0gcGlkO1xuICAgICAgICB0aGlzLmRvYiA9IGRvYjtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
>>>>>>> 3f488314d31b679180ad822e64aaccf8a6942a0d

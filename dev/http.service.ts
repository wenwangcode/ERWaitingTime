import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {Headers} from "angular2/http";
import {PatientRegisterComponent} from 'patientregister.component';
@Injectable()
export class HTTPService {
	constructor(private http:Http) {

	}

	getQuery() {
		return this.http.get("http://www.localhost:3002/visit").map(res => res.json());
	}

	getEQuery() {
		return this.http.get("http://www.localhost:3002/equipment").map(res => res.json());
	}

	getPQuery() {
		return this.http.get("http://www.localhost:3002/patient").map(res => res.json());
	}

	getSQuery() {
		return this.http.get("http://www.localhost:3002/staff").map(res => res.json());
	}

	postPQuery(info: string) {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post("http://www.localhost:3002/patient", info, {
			headers: headers
		});
	}
}

//this.http.post('http://localhost:3001/sessions/create', creds, {
//            headers: headers
//        })
//        .subscribe(
//            data => {
//                this.saveJwt(data.json().id_token);
//                username.value = null;
//                password.value = null;
//            },
//            err => this.logError(err.json().message),
//            () => console.log('Authentication Complete')
//        );
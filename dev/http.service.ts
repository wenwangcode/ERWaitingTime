import {Http, Response, Headers} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/Rx';

@Injectable()
export class HTTPService{
	constructor(private http:Http){
	}

	getAllFromTable(table: string){
		return this.http.get("http://localhost:3002/" + table)
			.map(response => response.json())
			.catch(this.handleError);
	}
	
	private handleError (error: Response) {
		console.error(error);
		return Observable.throw(error.json().error || 'Server error');
	}

	getVQuery(){
		return this.http.get("http://localhost:3002/visit").map(res => res.json());
	}
	getEQuery(){
		return this.http.get("http://localhost:3002/equipment").map(res => res.json());
	}
	getPQuery(){
		return this.http.get("http://localhost:3002/patient").map(res => res.json());
	}
	getSQuery(){
		return this.http.get("http://localhost:3002/staff").map(res => res.json());
	}
	getRQuery(){
		return this.http.get("http://localhost:3002/report").map(res => res.json());
	}
	getVIQuery(){
		return this.http.get("http://localhost:3002/vital").map(res => res.json());
	}
	getPRQuery(){
		return this.http.get("http://localhost:3002/prescription").map(res => res.json());
	}
	joinpv(){
		return this.http.get("http://localhost:3002/patient_visit").map(res => res.json());
	}
	joinpr(){
		return this.http.get("http://localhost:3002/patient_report").map(res => res.json());
	}
	selectyear(year){
		return this.http.get('http://localhost:3002/staff/'+year).map(res => res.json());
	}
	findpid(eidlist){
		return this.http.get('http://localhost:3002/utilize_equip/'+eidlist).map(res => res.json());
	}
	delete(input){
		return this.http.get('http://localhost:3002/patient/delete/'+input)
			.map(res => res.json())
			.catch(this.handleError);
	}
	getsavg(input){
		return this.http.get('http://localhost:3002/staff/avg/'+input).map(res => res.json());
	}
	getMaxVital(){
		return this.http.get('http://localhost:3002/vital/max').map(res => res.json());
	}
	updatePatient_http(input, pid){
		var json = JSON.stringify(input);
		var key = "json=";
		var param = key + json;
		console.log(param);
		var headers = new Headers();
		headers.append('Content-Type', 'application/x-www-form-urlencoded');
		return this.http.post('http://localhost:3002/patient/update/'+ pid, param, {headers: headers})
			.map(res=>res.json());
	}
	//Object {pid: 8, p_lname: "werwer", p_fname: "werwer", is_male: 1, dob: "2011-03-04"}


	post(jstring,table){
		console.log(jstring);
		var json = JSON.stringify(jstring);
		console.log(json);
		var key = "json=";
		var param = key + json;
		var headers = new Headers();
		headers.append('Content-Type', 'application/x-www-form-urlencoded');
		console.log("sending post request");
		return this.http.post('http://localhost:3002/'+table, param, {headers: headers})
			.map(res=>res.json())
			.catch(this.handleError);
	}

}
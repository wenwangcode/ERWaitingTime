GET: Query to 'http://localhost:3002/patient' or 'http://localhost:3002/equipment' to get all the relevant table tuples.
POST: Query to 'http://localhost:3002/<table name>', basically the same as above but use post request.
   available post-to tables are equipment, vital, report, visit, patient, staff, prescription
   
For POST request, you need to query to http://localhost:3002/<table name>/?json={"key":"value"}. Essentially, you need to attach your json object with "json="
   
   I'm following the format with http://www.jsontest.com/#validate. Also, I only support "application/x-www-form-urlencoded" content type, so put that in the header.


<<<<<<< HEAD
create table patient(
	gender varchar(6),
	pname varchar(30),
	pid number,
	dob date,
	constraint pk_patient primary key (pid));

create table vital(
	oxygen_saturation real,
	temperature real,
	blood_pressure real,
	pulse number,
	respiration number,
	vid number,
	constraint pk_vital primary key (vid));

create table report(
	rid number,
	diagnosis varchar(300),
	report_date date,
	symptom_name varchar(30),
	vid number,
	pid number,
	constraint pk_report primary key (rid),
	constraint fk_report_vital foreign key (vid) references vital (vid),
	constraint fk_report_patient foreign key (pid) references patient (pid)
	);

create table prescription(
	pname varchar(30),
	amount real,
	rid number,
	constraint pk_prescription primary key (pname, rid),
	constraint fk_prescription_report foreign key(rid) references report (rid));

create table write(
	rid number,
	sid number,
	constraint pk_write primary key (rid, sid),
	constraint fk_write_report foreign key (rid) references report (rid),
	constraint fk_write_staff foreign key (sid) references staff (sid));

create table sets(
	eid number,
	sid number,
	constraint pk_sets primary key (eid, sid),
	constraint fk_sets_equipment foreign key (eid) references equipment (eid),
	constraint fk_sets_staff foreign key (sid) references staff (sid));

create table utilize(
	pid number,
	eid number,
	constraint pk_utilize primary key (eid),
	constraint fk_utilize_patient foreign key (pid) references Patient (pid),
	constraint fk_utilize_equipment foreign key (eid) references Equipment (eid));

create table visit(
	pid number,
	sid number,
	room number,
	visit_date date,
	constraint pk_visit primary key (pid,sid),
	constraint fk_visit_patient foreign key (pid) references patient (pid),
	constraint fk_visit_staff foreign key (sid) references staff (sid));
=======
The json key is the same as the column name in your mysql database. so pid is just written as pid. 
>>>>>>> richard

create table staff(
	specialization varchar(50),
	experience_in_years number,
	sid number,
	isDoctor number,
	constraint pk_staff primary key (sid));

create table equipment(
	eid number,
	type varchar(20),
	room number,
	constraint pk_equipment primary key (eid));

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

create table symptom(
	sname varchar(30),
	rid number,
	constraint pk_symptom primary key (sname, rid),
	constraint fk_symptom_report foreign key (rid) references report (rid) );

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

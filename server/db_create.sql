drop database if exists emergency;
create database emergency;

use emergency;

create table staff(
	s_lname varchar(20),
	s_fname varchar(20),
	specialization varchar(50),
	experience_in_years int,
	sid int auto_increment,
	isDoctor BIT(1),
	constraint pk_staff primary key (sid));

create table equipment(
	eid int auto_increment,
	type varchar(20),
	room int,
	constraint pk_equipment primary key (eid));

create table patient(
	p_lname varchar(20),
	p_fname varchar(20),
	pid int auto_increment,
	is_male BIT(1),
	dob date,
	constraint pk_patient primary key (pid));

create table vital(
	oxygen_saturation decimal(5,2),
	temperature decimal(3,1),
	blood_pressure smallint,
	pulse int,
	respiration int,
	vid int auto_increment,
	constraint pk_vital primary key (vid));

create table report(
	rid int auto_increment,
	diagnosis varchar(300),
	report_date date,
	vid int,
	pid int,
	constraint pk_report primary key (rid),
	constraint fk_report_vital foreign key (vid) references vital (vid),
	constraint fk_report_patient foreign key (pid) references patient (pid) 
    on delete cascade
	);

create table prescription(
	pname varchar(30),
	amount real,
	rid int,
	constraint pk_prescription primary key (pname, rid),
	constraint fk_prescription_report foreign key(rid) references report (rid));

create table symptom(
	sname varchar(30),
	rid int,
	constraint pk_symptom primary key (sname, rid),
	constraint fk_symptom_report foreign key (rid) references report (rid) );

create table reported(
	rid int,
	sid int,
	constraint pk_write primary key (rid, sid),
	constraint fk_write_report foreign key (rid) references report (rid),
	constraint fk_write_staff foreign key (sid) references staff (sid));

create table sets(
	eid int,
	sid int,
	constraint pk_sets primary key (eid, sid),
	constraint fk_sets_equipment foreign key (eid) references equipment (eid),
	constraint fk_sets_staff foreign key (sid) references staff (sid));

create table utilize(
	pid int,
	eid int,
	constraint pk_utilize primary key (eid),
	constraint fk_utilize_patient foreign key (pid) references Patient (pid)
    on delete cascade,
	constraint fk_utilize_equipment foreign key (eid) references Equipment (eid));

create table visit(
	visitId int auto_increment,
	pid int,
	sid int,
	room int,
	visit_date datetime,
	constraint pk_visit primary key (visitId),
	constraint fk_visit_patient foreign key (pid) references patient (pid)
    on delete cascade,
	constraint fk_visit_staff foreign key (sid) references staff (sid));
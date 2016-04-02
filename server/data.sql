use emergency;

insert into staff (s_lname,s_fname,specialization,experience_in_years,isDoctor) values
	('lee','tom', 'cardiac', 5, 1),
	('foo','bucky','s1', 2, 0),
	('lea','meo', 's2', 6, 1),
	('app','salmon','s3', 6, 0);

insert into patient (p_lname,p_fname,is_male,dob) values
	('dick','emily', 0, '1996-02-26'),
	('su','tom',1,'1994-03-01'),
	('farm','charlotte',0,'1990-03-14'),
	('la','dude',1,'2001-01-01');

insert into visit (pid,sid,room, visit_date) values
	(1,2,1,'2010-02-25 03:35'),
	(1,3,2, '2010-02-26 12:30:23'),
	(1,2,3, '2007-02-16 23:00'),
	(1,4,4,'2011-06-12 08:15'),
	(2,3,5, '2012-10-02 9:15');

insert into equipment (type,room) values
('tv', 13),
('bed',14),
('bed', 12),
('chair', 15);

insert into vital (oxygen_saturation,temperature,blood_pressure,pulse,respiration) values
   (125.21, 50.1, 105, 161,12),
   (152.21, 24.1, 162, 152,13),
   (130.21, 12.1, 325, 11,27),
   (100.21, 15.1, 556, 85,16);

insert into report(diagnosis,report_date,vid,pid) values
    ('bad cold', '2013-10-06 4:16', 1,1),
    (' cold', '2013-10-06 4:16', 3,2),
    ('terrible cold', '2013-10-06 4:16', 2,1),
    ('fever', '2013-10-06 4:16', 3,3),
    ('headache', '2013-10-06 4:16', 1,4);

insert into prescription(pname,amount,rid) values
    ('med1', 102.12,1),
    ('med2', 52.10,2),
    ('med3', 112.12,3),
    ('med4', 12.12,4);
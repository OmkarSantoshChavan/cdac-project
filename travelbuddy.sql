create database travelbuddy;
use travelbuddy;
create table users
(
userid int not null AUTO_INCREMENT,
name varchar(20) not null,
email varchar(20) not null unique,
password varchar(20) not null,
contact_no varchar(10),
address varchar(30),
aadhar_card varchar(12) not null unique,
role varchar(15),
primary key(userid)
);

create table area
(
area_id int not null AUTO_INCREMENT,
pincode int not null,
area_name varchar(20),
city varchar(20),
primary key(area_id)
);

create table Property_details
(
pid int not null AUTO_INCREMENT,
userid int,
address varchar(30),
area_id int,
rent double,
description varchar(50),
primary key(pid),
foreign key(userid) references users(userid),
foreign key(area_id) references area(area_id)
);

create table facility
(
fid int not null AUTO_INCREMENT,
furnished varchar(5),
parking varchar(5),
security_guard varchar(5),
lift varchar(5),
cctv varchar(5),
pid int,
primary key(fid),
foreign key(pid) references Property_details(pid)
);

create table photos
(
photo_id int not null AUTO_INCREMENT,
photos longblob,
pid int,
primary key(photo_id),
foreign key(pid) references Property_details(pid)
);

create table favourite_list
(
fav_id int not null AUTO_INCREMENT,
userid int,
pid int,
primary key(fav_id),
foreign key(userid) references users(userid),
foreign key(pid) references Property_details(pid)
);

create table booking
(
bid int AUTO_INCREMENT,
userid int,
pid int,
booking_date Date,
from_date Date,
till_date Date,
Total_amt double,
status  varchar(10),
primary key(bid),
foreign key(userid) references users(userid),
foreign key(pid) references Property_details(pid)
);

create table payment
(
pay_id int AUTO_INCREMENT,
bid int,
amount double,
pmode varchar(10),
ptype varchar(10),
primary key(pay_id),
foreign key(bid) references booking(bid)
);

insert into users
values('Omkar','omkarschavan4@gmail.com','Omkar@123','9689829538','satara','635132326563','admin'),
('Akshay','akshaysalunkhe420@gmail.com','Akshay@123','9861339854','sambhajinagar','985432326563','owner'),
('Suraj','surajnade420@gmail.com','Suraj@123','9845549854','latur','23542326563','customer'),
('Chorage','chorageakshay9211@gmail.com','Akshay_653','9876549854','Satara','87782326563','customer');

insert into area(pincode,area_name,city)
values('431103','kannad','sambhajinagar'),
('413510','murud','latur'),
('415002','shaniwar peth','satara'),
('411044','pimpri','pune');

insert into Property_details(userid,address,area_id,rent,description)
values('101','house no:63 shantinagar',1,7500.00,'3 BHK duplex with sea facing and swimming pool');

insert into  facility(furnished,parking,security_guard,lift,cctv,pid)
values('No','Yes','No','No','Yes',1);

insert into photos(photos,pid)
values(load_file('D:/project/photos/silveroak1.jpeg'),1),
(load_file('D:/project/photos/silveroak2.jpeg'),1);




/* 
This file is to help setting up  or SQL Databases correctly.

*/

/* Create and use our  db */
CREATE DATABASE  `drumsILike`;
USE `drumsILike`;

/* Create a table for all your star wars characters */
CREATE TABLE `cymbals` (
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`brand` VARCHAR( 255) NOT NULL,
	`name` VARCHAR( 255 ) NOT NULL,
	`diameter` Int( 11 ) NOT NULL,
	`model` VARCHAR( 255 ) NOT NULL,
	`price` Int(11) NOT NULL,

	PRIMARY KEY ( `id` ) ); /* Set ID as primary key */

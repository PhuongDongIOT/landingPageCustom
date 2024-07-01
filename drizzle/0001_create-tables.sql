CREATE TABLE `customers` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`first_name` varchar(256),
	`last_name` varchar(256),
	`email` varchar(256),
	CONSTRAINT `customers_id` PRIMARY KEY(`id`)
);

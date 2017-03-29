CREATE TABLE nameplate_data (
	id SERIAL PRIMARY KEY,
	manufacturer VARCHAR(120) NOT NULL,
	model_number VARCHAR(120) NOT NULL,
	serial_number VARCHAR(120) NOT NULL,
  date_of_manufacturer DATE,
  input_voltage INT,
  other_notes VARCHAR(120)
);
CREATE TABLE nameplate_data (
	id SERIAL PRIMARY KEY,
	manufacturer VARCHAR(120),
	model_number VARCHAR(120),
	serial_number VARCHAR(120),
  	date_of_manufacturer VARCHAR(120),
  	input_voltage VARCHAR(120),
    other_notes VARCHAR(120)
);
CREATE TABLE system_history (
	id SERIAL PRIMARY KEY,
	date VARCHAR(120),
	services_and_repairs VARCHAR(120),
	vendors VARCHAR(120),
  	parts_used VARCHAR(120)
);
CREATE TABLE business (
	id SERIAL PRIMARY KEY,
	business_name VARCHAR(120),
	contact VARCHAR(120),
	telephone VARCHAR(120),
	website VARCHAR(120),
	email VARCHAR(120),
  	address01 VARCHAR(120),
  	address02 VARCHAR(120),
	city VARCHAR(120),
	state VARCHAR(120),
  	country VARCHAR(120),
  	postal_code VARCHAR(120),
  	notes VARCHAR(240)
);
CREATE TABLE usernotes (
	id SERIAL PRIMARY KEY,
	date VARCHAR(25),
	usernotes VARCHAR(8000)
);

INSERT INTO nameplate_data (manufacturer, model_number, serial_number, date_of_manufacturer, input_voltage, other_notes)
VALUES 
('Bird-Johnson', '654321', '123321', '2017-03-20',  '24', 'Bird-Johnson_Note'),
('Caterpillar', '3516', '123456789', '2017-03-20',  '480', 'Caterpillar_Note'),
('MTU-Detroit Diesel', '4000 series', '123321', '2017-03-20',  '480', 'Imported from Germany'
);
INSERT INTO system_history (date, services_and_repairs, vendors, parts_used)
VALUES ('2017-03-27', 'replaced hot water heater', 'Clueless Joe Jackson', 'complete unit'),
('2017-03-31', 'replaced exterior light fixture', 'Light-my-Fire Electrical', 'added motion detection'), ('2017-04-12', 'repaired back concrete stairs', 'myself', 'mixed concrete'
);
INSERT INTO business (business_name, contact, telephone, website, email, address01, address02, city, state, country, postal_code, notes)
VALUES ('Acme', 'Fred Durst', '555-555-5555', 'www.www.com',  'www@www.com', '101 Address01 Way', 'Address02', 'Minneapolis', 'Minnesota', 'USA', '55407', 'notes'
);
INSERT INTO usernotes (date, usernotes)
VALUES ('2017-03-27', 'The quick brown fox jumps over the lazy dog'
);
INSERT INTO nameplate_data (manufacturer, model_number, serial_number, date_of_manufacturer, input_voltage, other_notes) VALUES ($1, $2, $3, $4, $5, $6
);
UPDATE nameplate_data SET manufacturer=$1, model_number=$2, serial_number=$3, date_of_manufacturer=$4, input_voltage=$5, other_notes=$6 WHERE id=$1, $2, $3, $4, $5, $6
;
INSERT INTO system_history (date, services_and_repairs, vendors, parts_used) WHERE id=$5
;
UPDATE system_history SET date=$1, services_and_repairs=$2, vendors=$3, parts_used=$4 WHERE id=$5
;
DELETE FROM nameplate_data WHERE id=4
;
ALTER TABLE "business" ADD "contact" VARCHAR(120);
ALTER TABLE "business" DROP COLUMN "Contact";
DROP TABLE "business";

SELECT * FROM nameplate_data ORDER BY manufacturer, id asc;
SELECT * FROM nameplate_data ORDER BY id asc;
SELECT * FROM system_history ORDER BY id asc;
SELECT * FROM business ORDER BY id asc;
SELECT * FROM usernotes ORDER BY id asc;
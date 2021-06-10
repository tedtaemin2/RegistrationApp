-- CREATE TABLE Registration (Registration_ID serial primary key, First_Name varchar not null, Last_Name varchar not null, Address_1 varchar not null, Address_2 varchar, City varchar not null, State varchar not null, Zip_Code integer not null, Country varchar not null, Time_Stamp timestamp not null)-- ^ - Schema of Table 'Registration'

-- INSERT INTO registration (First_Name, Last_Name, Address_1, Address_2, City, State, Zip_Code, Country, Time_Stamp) VALUES ('Donald', 'Duck', '12345 Disneyland Dr.','Apt. 2', 'Anaheim', 'CA', 92801, 'USA', '2014-07-01 00:00:00')
-- ^ - Create new input into Table 'Registration'

-- SELECT *
-- FROM Registration
-- ORDER BY Time_Stamp DESC
-- ^Read all inputs by descending timestamp from Table 'Registration'

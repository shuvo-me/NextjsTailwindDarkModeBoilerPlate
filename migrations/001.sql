--Up
Create Table Person (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR 200,
    email VARCHAR 200,
    address VARCHAR 200, 
)
Create Table Vehicle (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    person_id INTEGER FOREIGN KEY REFERENCES Person(id),
    brand VARCHAR 200,
    model VARCHAR 200
)
--Down
DROP TABLE Person;
DROP TABLE Vehicles;
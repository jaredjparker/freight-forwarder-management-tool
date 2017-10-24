create table Customers(
    customer_id serial primary key,
    customer_name text,
    person_in_charge text,
    address text,
    cell_phone integer,
    email text,
    office_phone integer,
    industry text,
    air_freight numeric,
    fuel_surcharge numeric,
    security_surcharge numeric,
    notes text
);
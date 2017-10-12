create table Airlines(
    airline_id serial primary key,
    air_freight numeric(6, 2),
    fuel_surcharge numeric(6, 2),
    security_surcharge numeric(6, 2),
    screening numeric(6, 2),
    iata_airline_code integer,
    airline_name text,
    airline_type text
);
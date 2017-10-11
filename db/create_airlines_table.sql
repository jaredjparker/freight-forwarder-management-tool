create table Airlines(
    airline_id serial primary key,
    air_freight integer,
    fuel_surcharge integer,
    security_surcharge integer,
    screening integer,
    iata_airline_code integer,
    airline_name text,
    airline_type text
);
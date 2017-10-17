INSERT INTO airlines (
    air_freight,
    fuel_surcharge, 
    security_surcharge, 
    screening, 
    iata_airline_code, 
    airline_name, 
    airline_type)
VALUES (
    $1,
    $2,
    $3,
    $4,
    $5,
    $6,
    $7);
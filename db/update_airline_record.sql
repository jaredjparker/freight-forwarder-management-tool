UPDATE Airlines
SET air_freight = $1, fuel_surcharge = $2, security_surcharge = $3, screening = $4, iata_airline_code = $5, airline_name = $6, airline_type = $7
WHERE airline_id = $8;
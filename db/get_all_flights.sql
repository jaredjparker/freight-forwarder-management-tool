select flights.flight_id, flights.chargeable_weight, airlines.air_freight
from flights
join airlines on airlines.airline_id=flights.airline_id;
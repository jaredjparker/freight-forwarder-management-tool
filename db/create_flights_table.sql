CREATE TABLE Flights(
    Flight_Id serial primary key,
    origin text,
    destination text,
    actual_weight integer,
    chargeable_weight integer,
    shipper text,
    consignee text,
    spot_number text,
    employee_obtained_spot text,
    issuing_employee text,
    number_of_pieces integer,
    slac integer,
    commodity text,
    airline text,
    master_air_waybill integer
);
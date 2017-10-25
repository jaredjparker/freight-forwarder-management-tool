UPDATE Customers
SET air_freight = $1,
fuel_surcharge = $2,
security_surcharge = $3,
cell_phone = $4,
office_phone = $5,
customer_name = $6,
industry = $7,
person_in_charge = $8,
address = $9,
email = $10,
notes = $11 
WHERE customer_id = $12;
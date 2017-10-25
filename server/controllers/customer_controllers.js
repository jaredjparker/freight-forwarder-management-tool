module.exports = {

    getCustomers: (req, res, next) => {
        const db = req.app.get('db');

        db.find_all_customers()
            .then((customers) => res.status(200).send(customers))
            .catch(() => res.status(500).send());
    },

    getOneCustomer: (req, res, next) => {
        const db = req.app.get('db');
        const customerId = req.params.id;

        db.find_customer(customerId)
            .then((customer) => res.status(200).send(customer[0]))
            .catch(() => res.status(500).send());
    },

    updateCustomer: (req, res, next) => {
        const db = req.app.get('db');
        const { air_freight, fuel_surcharge, security_surcharge, cell_phone, office_phone, customer_name, industry, person_in_charge, address, email, notes, customer_id } = req.body;

        db.update_customer_record([air_freight, fuel_surcharge, security_surcharge, cell_phone, office_phone, customer_name, industry, person_in_charge, address, email, notes, customer_id])
            .then(() => res.status(200).send())
            .catch(() => res.status(500).send());
    }
}
module.exports = {

    // createUser is currently being used to test backend to db connection.

    createTest: (req, res, next) => {
        const db = req.app.get('db');
        const { name } = req.body;

        db.create_test(name)
            .then(() => res.status(200).send())
            .catch(() => res.status(500).send());
    },

    getAirlines: (req, res, next) => {
        const db = req.app.get('db');

        db.find_all_airlines()
            .then((airlines) => res.status(200).send(airlines))
            .catch(() => res.status(500).send());
    },

    getOneAirline: (req, res, next) => {
        const db = req.app.get('db');
        const airlineId = req.params.id;

        db.find_airline(airlineId)
            .then((airline) => res.status(200).send(airline[0]))
            .catch(() => res.status(500).send());
    },

    deleteAirline: (req, res, next) => {
        const db = req.app.get('db');
        const airlineId = req.params.id;
    
    db.delete_airline_record(airlineId)
        .then((airline) => res.status(200).send(airline[0]))
        .catch(() => res.status(500).send());
    },

    createAirline: (req, res, next) => {
        const db = req.app.get('db');
        const {air_freight, fuel_surcharge, security_surcharge, screening, iata_airline_code, airline_name, airline_type} = req.body;

        db.add_airline_record([air_freight, fuel_surcharge, security_surcharge, screening, iata_airline_code, airline_name, airline_type])
            .then(() => res.status(200).send())
            .catch(() => res.status(500).send());
    },

    updateAirline: (req, res, next) => {
        const db = req.app.get('db');
        const {air_freight, fuel_surcharge, security_surcharge, screening, iata_airline_code, airline_name, airline_type, airline_id} = req.body;

        db.update_airline_record([air_freight, fuel_surcharge, security_surcharge, screening, iata_airline_code, airline_name, airline_type, airline_id])
            .then(() => res.status(200).send())
            .catch(() => res.status(500).send());
    }
};  
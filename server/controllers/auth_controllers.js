module.exports = {

    // createUser is currently being used to test backend to db connection.

    createTest: (req, res, next) => {
        const db = req.app.get('db');
        const { name } = req.body;

        db.create_test(name)
            .then(() => res.status(200).send())
            .catch(() => res.status(500).send());
    },

    getFlights: (req, res, next) => {
        const db = req.app.get('db');

        db.find_all_flights()
            .then((flights) => res.status(200).send(flights))
            .catch(() => res.status(500).send());
    }
};  
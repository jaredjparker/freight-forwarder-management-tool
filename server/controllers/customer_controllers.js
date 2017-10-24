module.exports = {

    getCustomers: (req, res, next) => {
        const db = req.app.get('db');

        db.find_all_customers()
            .then((customers) => res.status(200).send(customers))
            .catch(() => res.status(500).send());
    }
}
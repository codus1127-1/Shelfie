module.exports = {

    getProducts: (req, res) => {
        const database = req.app.get('db')
        database.get_products()
        .then(result => {
            res.status(200).send(result)
        }).catch(error => {
            console.log(error)
        })
     },

     addProduct: (req, res) => {
        const db = req.app.get('db')
        const {name, price, image} = req.body
        db.add_product(name, price, image)
        .then(result => {
            res.status(200).send(result)
        })
    },

    deleteProduct: (req, res) => {
        const db = req.app.get('db')

        db.delete_product(req.params.id)
        .then(result => res.status(200)
        .send(result))
    },

    update: (req, res) => {
        const db = req.app.get('db');
        const { params, body } = req;

        db.update_products(body.name, body.price, body.image, params.id)
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: 'Oops, something went wrong' })
                console.log(err)
            })
    },

    getOne: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params

        db.get_one(id)
            .then(results => res.status(200)
            .send(results[0]))
            .catch(err => {
                res.status(500).send({ errorMessage: 'Oops, something went wrong' });
                console.log(err)
            })
    }




}
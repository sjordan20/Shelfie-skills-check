

module.exports = {


    getProducts: (req, res) => {
        const dbInstance = req.app.get('db')

        dbInstance.get_all_products()
            .then(products => res.status(200).send(products))
            .catch(err => {
                res.status(500).send({ errorMessage: 'oopsy daisy' })
            })
    },

    postProducts: (req, res) => {
        const dbInstance = req.app.get('db')
        const { name, price, img } = req.body

        dbInstance.create_product(name, price, img)
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: 'oopsy daisy' })
            })
    },

    deleteProducts: (req, res) => {
        const dbInstance = req.app.get('db')
        const { product_id } = req.params

        dbInstance.delete_product(product_id)
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: 'oopsy daisy' })
            })
    }


}
const bcrypt = require('bcrypt-nodejs')

module.exports = app => { //recebe como parâmetro o app
    const obterHash = (password, callback) => {
        bcrypt.genSalt(10, (err, salt) => { //dez iterações, valor padrão
            bcrypt.hash(password, salt, null, (err, hash) => callback(hash)) //valor de entrada
        })
    }

    const save = (req, res) => {
        obterHash(req.body.password, hash => {
            const password = hash

            app.db('users')
                .insert({
                    name: req.body.name,
                    email: req.body.email.toLowerCase(),
                    password
                })
                .then(_ => res.status(204).send())
                .catch(err => res.status(400).json(err))
        })
    }

    return { save }
}

const router = require('express').Router()
const {Traveller, Trip, Location} = require('../../models')


// GET returns all travellers

router.get('/', async (req,res) => {
    try {
        const travellers = await Traveller.findAll();
        res.status(200).json(travellers)
    } catch (err) {
        console.log(err)
    }
})

// POST adds traveller

router.post('/', async (req,res) => {
    try {
        const traveller = await Traveller.create(req.body)
        res.status(200).json(traveller)
    } catch (err) {
        console.log(err)
    }
})

// GET ONE returns one traveller & associated trips 

router.get('/:id',async (req,res) => {
    try {
        const traveller = await Traveller.findByPk(req.params.id, {
            include: [Trip]
        })

        if (!traveller) {
           return res.status(400).json({message: 'No traveller!'})
        }

        res.status(200).json(traveller)

    } catch (err) {
        console.log(err)
    }
})

// DELETE removed traveller and associated trips 

router.delete('/:id', async (req,res) => {
    try {
        const traveller = await Traveller.destroy({
            where: {
                id: req.params.id
            }
        })

        if (!traveller) {
           return res.status(400).json({message: 'No traveller!'})
        }

        res.status(200).json(traveller)
    } catch (err) {
        console.log(err)
    }
})


module.exports = router;


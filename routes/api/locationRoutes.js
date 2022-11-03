const router = require('express').Router()
const { Location, Trip } = require('../../models')


// GET all locations

router.get('/', async (req,res) => {
    try {
        const locations = await Location.findAll();
        res.status(200).json(locations)
    } catch (err) {
        console.log(err)
    }
})

// POST new location

router.post('/', async (req,res) => {
    try {
        const location = await Location.create(req.body)
        res.status(200).json(location)
    } catch (err) {
        console.log(err)
    }
})


// GET ONE single location & associated trips

router.get('/:id', async (req,res) => {
    try {
        const location = await Location.findByPk(req.params.id, {
            include:[Trip]
        })

        if (!location) {
            return res.status(400).json({message: 'No location!'})
         }

        res.status(200).json(location)
    } catch (err) {
        console.log(err)
    }
})

// DELETE location 

router.delete('/:id', async (req,res) => {
    try {
        const location = await Location.destroy({
            where: {
                id: req.params.id
            }
        })

        if (!location) {
            return res.status(400).json({message: 'No location!'})
         }

         res.status(200).json(location)

    } catch (err) {
        console.log(err)
    }
})


module.exports = router;
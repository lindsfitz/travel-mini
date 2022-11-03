const router = require('express').Router()
const { Trip } = require('../../models')


// POST creates data between travellers & location 

router.post('/', async (req,res) => {
    try {
        const trip = await Trip.create(req.body)
        res.status(200).json(trip)

    } catch (err) {
        console.log(err)
    }
})

//  delete that removes trip 

router.delete('/:id', async (req,res) => {
    try {
        const trip = await Trip.destroy({
            where: {
                id: req.params.id
            }
        })

        if (!trip) {
           return res.status(400).json({message: 'No trip!'})
        }

        res.status(200).json(trip)
    } catch (err) {
        console.log(err)
    }
} )


module.exports = router;
const router = require('express').Router()

let smurfs = [
        {
            name: 'Brainey',
            age: 200,
            height: '5cm',
            id: 0
        }
    ]

let smurfId = smurfs.length

router.get('/', (req, res) => {
    res.status(200).json(smurfs)
})

router.delete('/:id', (req, res) => {
    const { id } = req.params
    const foundSmurf = smurfs.find(smurf => smurf.id == id)

    if (foundSmurf) {
        //const SmurfRemoved = { ...foundSmurf }
        smurfs = smurfs.filter(smurf => smurf.id != id)
        res.status(200).json(smurfs)
    } else {
        res.status(404).json({ message: 'smurf not found' })
    }
})

router.post('/', (req, res) => {
    const { name, age, height } = req.body
    const newSmurf = { name, age, height, id: smurfId }
    if (!name || !age || !height) {
    
    }
    else {
        const findSmurfByName = smurf => {
            return smurf.name === name
        }
        if (smurfs.find(findSmurfByName)) {
            res.status(400).json({ message: 'Smurf exists' })
        }
        else {
            smurfs.push(newSmurf)
            smurfId++
            res.status(201).json(smurfs)
        }
    }
})
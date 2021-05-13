const router = require('express').Router();
const Workout = require('../models/Workout');

router.get('/api/workouts', (req, res) => {
    Workout.find({})
    .then(data => {
        console.log(data)
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.get('/api/workouts/range', (req, res) => {
    /*Workout.find({})*/
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercises.duration'
                }
            }
        }
    ])
    .sort({day: -1}).limit(7)
    .then(data => {
        console.log(data);
        res.json(data.reverse());
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.post('/api/workouts', ({body}, res) => {
    console.log("bodyweight", body)
    Workout.create(body)
    .then(data => {
        console.log(data);
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.put('/api/workouts/:id', ({body, params}, res) => {
    console.log("the body is here", body)
    Workout.updateOne({ _id : params.id }, {$push: { exercises: body }}, {new: true})
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});


module.exports = router;
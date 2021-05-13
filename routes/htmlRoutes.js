var path = require("path");
var router = require("express").Router();
// routes for home
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});
// route to add exercises
router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});
//route for overall stats
router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});


module.exports = router;
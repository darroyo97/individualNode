const express = require('express');
const router = express.Router();
let data = require('../data/data.json')

let photoList = [];
router.get('/legends', (req, res) => {
    data.legends.forEach((e) => {
        photoList.push(e.characters)
    })
    res.render('legends.ejs', {
        legends: data.legends,
        photos: photoList,
        pageID: 'legendsList'
    })
})
router.get('/legends/:id', (req, res) => {
    let id = req.param('id')
    res.render('legends.ejs', {
        legends: data.legends[id],
        photos: photoList,
        pageID: 'pageLegend'
    })
})



module.exports = router;
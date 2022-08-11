const router = require('express').Router()

router.get('/notes', (req, res) => {
  res.send('Notes desde la base de datos nice')
})
module.exports = router
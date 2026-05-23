const express = require('express');

const router = express.Router();

router.get('/:id', async (req, res) => {

  res.json({
    success: true,

    match: {
      id: req.params.id,

      homeTeam: {
        name: 'Arsenal'
      },

      awayTeam: {
        name: 'Chelsea'
      },

      score: {
        home: 2,
        away: 1
      }
    }
  });

});

module.exports = router;

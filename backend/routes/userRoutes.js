// backend/routes/userRoutes.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ msg: 'Rota de usuários funcionando!' });
});

module.exports = router;

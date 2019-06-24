const { Router } = require('express');
const indexCtrl = require('./index.controller');

const router = new Router();

router.get('/', indexCtrl.getMessage);
router.post('/', indexCtrl.postMessage);
router.put('/', indexCtrl.putMessage);
router.delete('/', indexCtrl.deleteMessage);

module.exports = router;

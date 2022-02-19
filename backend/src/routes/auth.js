const {Router} = require('express');
const { loginUser, revalidateToken } = require('../controllers/auth');
const { validateJWT } = require('../middleware/validate-token');
const router = Router();



router.post('/login', loginUser);
router.get('/renew', validateJWT ,revalidateToken);

module.exports = router;
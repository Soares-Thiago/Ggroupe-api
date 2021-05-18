var router = express.Router();

const userController  = require('../controllers/user')

router.post("/", userController.create)

module.exports = router;

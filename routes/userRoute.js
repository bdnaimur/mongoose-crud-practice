const router = require("express").Router();
const users = require("../controller/users");


router.post("/adduser", users.adduser);
router.get('/allusers', users.allusers)
router.get('/username/:id', users.user_email)
router.put('/update/:id', users.update_user)
router.delete('/delete/:id', users.deleteduser)



module.exports = router;
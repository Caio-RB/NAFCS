let exp = require("express");
const router = exp.Router();

router.route("/")
	.get((req, res)=>{
		res.send("saida get");
	})
	.post((req,res)=>{
		res.send("hello post");
	});

module.exports = router;

const router = require("express").Router();

router.get("/", (req, res, next) => {
	res.render("account/account_info", { title: "Your Account" });
});

router.get("/orders", (req, res, next) => {
	res.render("account/orders", { title: "Your Orders" });
});

router.get("/books", (req, res, next) => {
	res.render("account/book_you_buy", { title: "Your Books" });
});
module.exports = router;

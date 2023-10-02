const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const CrudRoute = require("./routes/crud").router;
const dummyRoute = require("./routes/dummy").dummy;

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

const MONGO_URI =
	"mongodb+srv://psr_mathur:12345@formilder.fvxlbut.mongodb.net/vendorsdb?retryWrites=true&w=majority";
mongoose
	.connect(MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => app.listen(port, () => console.log(`On port ${port} with db.`)))
	.catch((err) => console.log(err));

app.use("/api", CrudRoute);

app.use("/api", dummyRoute);

app.get("/", (req, res) => {
	console.log(req.body);
	return res.send("Hello World");
});

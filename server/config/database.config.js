const mongoose = require("mongoose");
uri = "product_manager"

mongoose.connect(`mongodb://localhost:${uri}`, {
    useNewUrlParser:true,
    useUnifiedTopology: true
})
    .then(() => console.log("Your're now in the mainframe . . ."))
    .catch((err) => console.log("Meltdown! Meltdown! Meltdow!", err))
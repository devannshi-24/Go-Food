const express = require("express");
const router = express.Router();

router.post("/foodData",(req,res)=>{
    try {
        console.log("✅ DisplayData file loaded");
        res.send([global.food_items,global.foodCategory])
        console.log("display data called");
    } catch (error) {
        console.error(error.message);
        res.send("Server Error");
    }
})
                                                           
module.exports = router;
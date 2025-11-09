const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://devannshii24:ttlshiwwya@cluster0.oci5jcs.mongodb.net/gofoodmern?appName=Cluster0'
const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("✅ Connected to MongoDB");

        // Fetch food_items
        const foodItemsCollection = mongoose.connection.db.collection("food_items");
        const foodItemsData = await foodItemsCollection.find({}).toArray();
        global.food_items = foodItemsData;

        // Fetch food_category
        const foodCategoryCollection = mongoose.connection.db.collection("food_category");
        const foodCategoryData = await foodCategoryCollection.find({}).toArray();
        global.foodCategory = foodCategoryData;

        console.log("✅ Loaded global data");
    } catch (error) {
        console.log("❌ MongoDB Error:", error);
    }
}

module.exports = mongoDB;
/*
1.Find all the information about each products


   =>  db.ProductsList.find({}).pretty();


 2.Find the product price which are between 400 to 800


  => db.ProductsList.find({ product_price: { $gt: 400, $lt: 800 } }).pretty();


3.Find the product price which are not between 400 to 600


  =>db.ProductsList.find({ product_price: { $not: { $gt: 400, $lt: 600 } } });


 4.List the four product which are greater than 500 in price


    =>db.ProductsList.find({ product_price: { $gte: 500 } }).limit(4);


 5.Find the product name and product material of each products


  =>db.ProductsList.find({}, { product_name: 1, product_material: 1 });


 6.Find the product with a row id of 10


 =>db.ProductsList.find({ id: "10" });


 7.Find only the product name and product material


 =>db.ProductsList.find({}, { product_name: 1, product_material: 1 });


 8.Find all products which contain the value of soft in product material


 =>db.ProductsList.find({ product_material: "Soft" }, { product_material: 1 });


 9.Find products which contain product color indigo  and product price 492.00


  =>db.ProductsList.find({

  $or: [{ product_color: "indigo" }, { product_price: 492.0 }],

}).pretty();


 10.Delete the products which product price value are same


 =>db.ProductsList.aggregate([

  {

    $group: {

      _id: "$product_price",

      Same_price_id: { $push: "$_id" },

      count: { $count: {} },

    },

  },

  { $match: { count: 2 } },

]);

 => db.ProductsList.deleteMany({ product_price: { $in: [36, 47] } });   
 */
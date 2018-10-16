var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "P@ssword",
  database: "bamazon_db"
});

var products = [];

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  displayProducts();
  
});
// function which prompts the user for what action they should take
function start() {
  inquirer 
    .prompt([{
      name: "whichID",
      type: "rawlist",
      choices: function() {
        var choiceArray = [];
        for (var i = 0; i < products.length; i++) {
          choiceArray.push(products[i].item_name);
        }
        return choiceArray;
      },
      message: "What is the ID of the item you were interested in?"},
      {
        name: "quantity",
        type: "input",
        message: "How many would you like to order?"
      }
    
    ])
    .then(function (answers)
    {
      console.log(answers);
      var orderQuantity = parseInt(answers.quantity);
      var orderID = answers.whatID;
     
      for (var j = 0; j < products.length; j++) {
        if (orderID === products[j].item_name) {
          if (products[j].stock_quantity < orderQuantity) {
            console.log("Insufficient Quantity!");
        
          }
      else {
        updateInventory(products[j].item_name, products.stock_quantity - orderQuantity)
      };         }
      }
    }
  )
  }

    function displayProducts () {
      connection.query("SELECT * FROM products", function(err, results) {
        if (err) throw err;
        products = results;
        console.log("name: ", "product id: ", "price: ", "quantity: ");
        for (var i = 0; i < results.length; i++) {
        var product = results[i];
        console.log(product.item_name + "  " + product.item_id + "  " + product.price + "  " + product.stock_quantity)
        }
        start() ;

    })}
    
    // function updateInventory(item_name, updatedQuantity) {
      

    // }
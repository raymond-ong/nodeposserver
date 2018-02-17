'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/productsController');

  // todoList Routes
  app.route('/products')
    .get(todoList.list_all_products)
    

  app.route('/cart')
    .post(todoList.save_cart);
  // app.route('/products/:productId')
  //   .get(todoList.get_product_details)
  //   .put(todoList.update_a_product)
  //   .delete(todoList.delete_a_product);
};
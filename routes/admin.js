// CRUD of products

const express = require('express');
const path = require('path');

const router = express.Router();

// NOTE: here we created a simple html and used
// router.get('/add-prod', (req, res, next) => {
//   console.log('in add product path');
//   var simpleFormToAddProduct = `
//       <form action="/admin/new-product" method="post">
//       <input type="text" name="title" id="" />
//       <button type="submit">Add Prod</button>
//       </form>
//       `;
//   res.send(simpleFormToAddProduct);
//   //   next();
// });

// NOTE: same as above but will use the html file instead of inline definition
router.get('/add-prod', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

router.post('/new-product', (req, res, next) => {
  console.log('we are in product', req.body);
  res.redirect('/');
});

module.exports = router;

// UI list of products

const express = require('express');
const path = require('path');

const router = express.Router();

// router.get('/', (req, res) => {
//   res.send('Hi Welcome');
//   return;
// });


// NOTE: will use this to send file for above path
router.get('/', (req, res, next) => {
    /** SECTION
     * In JavaScript, the res.sendFile() function is used to send a file as a response to an HTTP request. 
     * It is commonly used in web development to serve static files, such as HTML, CSS, or image files, to the client.
     * In the given code snippet, path.join() is used to construct the file path. __dirname is a special variable in Node.js that represents the current directory of the script. 
     * The ../ part is used to navigate up one level in the directory structure. 
     * Finally, 'views/shop.html' specifies the relative path to the shop.html file.
     * Overall, the code is sending the shop.html file as the response to the HTTP request.
     * 
     */
  res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

module.exports = router;

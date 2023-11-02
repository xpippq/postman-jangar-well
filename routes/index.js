const router = require("express").Router();
const {
  FindAllBooks,
  detailBook,
  tambahBuku,
  deleteBuku,
  updateBuku,
} = require("../controllers/BookController");
const {
  findAllUsers,
  detailUser,
  tambahUser,
  deleteUser,
  updateUser,
} = require("../controllers/UserController");
const { Book } = require("../models");

//endpointbuku
router.get("/books", FindAllBooks);
router.get("/findbook", detailBook);
router.post("/book", tambahBuku);
router.delete("/book", deleteBuku);
router.put("/book", updateBuku);

//endpointuser
router.get("/user", findAllUsers);
router.get("/user:id", detailUser);
router.post("/user", tambahUser);
router.delete("/user", deleteUser);
router.put("/user", updateUser);

module.exports = router;

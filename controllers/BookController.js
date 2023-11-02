const { Book } = require("../models");
const FindAllBooks = async (req, res) => {
  const data = await Book.findAll();

  res.json({
    message: "JALAN BOSKU!!!",
    data: data,
  });
};

const detailBook = async (req, res) => {
  let id = parseInt(req.body.id);

  const data = await Book.findByPk(id);
  res.json({
    message: "JALAN BOSKU!!!",
    data: data,
  });
};

const tambahBuku = async (req, res) => {
  try {
    const data = req.body;

    const result = await Book.create(data);
    res.json({
      result: result,
    });
    //res.send("TAMBAH DATA BUKU");
  } catch (error) {
    res.json({
      message: "error : " + error,
    });
  }
};

const deleteBuku = async (req, res) => {
  try {
    const id = req.body.id;
    const result = await Book.destroy({
      where: {
        id: id,
      },
    });

    res.json({
      message: "Buku berhasil dihapus",
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi kesalahan saat menghapus buku",
    });
  }
};

const updateBuku = async (req, res) => {
  try {
    const id = req.body.id;

    const result = await Book.update(
      {
        judul: "JUJUR KASIAN",
        // deskripsi
      },
      {
        where: {
          id: id,
        },
      }
    );

    res.json({
      message: "DONE UPDATE BANG!",
    });
  } catch (error) {
    res.json({
      message: "ERROR BROW : " + error,
    });
  }
};

module.exports = {
  FindAllBooks,
  detailBook,
  tambahBuku,
  deleteBuku,
  updateBuku,
};

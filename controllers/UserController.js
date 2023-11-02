// UserController.js
const { User } = require("../models");

const findAllUsers = async (req, res) => {
  const data = await User.findAll();

  res.json({
    message: "ini dari router",
    data: data,
  });
};

const detailUser = async (req, res) => {
  let id = parseInt(req.body.id);

  const data = await User.findByPk(id);
  res.json({
    message: "ini dari router",
    data: data,
  });
};

const tambahUser = async (req, res) => {
  try {
    const data = req.body;

    const result = await User.create(data);
    res.json({
      result: result,
    });
  } catch (error) {
    res.json({
      message: "error : " + error,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.body.id;

    const result = await User.destroy({
      where: {
        id: id,
      },
    });

    res.json({
      message: "User berhasil dihapus",
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi kesalahan saat menghapus user",
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.body.id;
    const newData = req.body;

    const result = await User.update(newData, {
      where: {
        id: id,
      },
    });

    res.json({
      message: "User berhasil diupdate",
      data: newData,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi kesalahan saat mengupdate user",
    });
  }
};

module.exports = {
  findAllUsers,
  detailUser,
  tambahUser,
  deleteUser,
  updateUser,
};

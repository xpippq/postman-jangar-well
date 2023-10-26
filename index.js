const { Client } = require("pg");
const express = require("express");

const app = express();
app.use(express.json());

const port = 7512;
const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "book_store_api",
  password: "user",
  port: "5432",
});

client
  .connect()
  .then(() => {
    console.log("Tehubung ke Database BOSKU !!");
  })
  .catch((error) => {
    console.error("Gagal Terhubung ke Database:", error);
  });

app.get("/users", (req, res) => {
  // AKSES DATABASE
  client
    .connect()
    .then(() => {
      console.log("Tehubung ke Database BOSKU !!!");
    })
    .catch((error) => {
      console.error("Gagal Terhubung ke Database:", error);
    });
  // AMBIL DATA
  let data;
  client.query("SELECT user_id, name, alamat FROM users;", (req, result) => {
    res.json(result.rows);
  });
});

app.get("/users/:id", async (req, res) => {
  let id = parseInt(req.params.id);

  try {
    const query = "select * from users where user_id = $1";
    const { rows } = await client.query(query, [id]);
    if (rows.length === 0) {
      return res.status(404).json({
        message: "data not found",
      });
    } else {
      res.json({
        data: rows[0],
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "ada yang error dengan database",
    });
  }
});

app.post("/users", async (req, res) => {
  let data = req.body;

  const query = "INSERT INTO users(user_id, name, alamat) VALUES ($1, $2, $3);";
  client.query(query, [data.user_id, data.name, data.alamat], (err, result) => {
    if (err) {
      console.error("Error", err);
      return res.status(500).json({ error: "Terjadi kesalahan " + err });
    } else {
      res.json({
        message: "Data berhasil ditambahkan",
      });
    }
  });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
// tugas ; id (integer), judul (), penerbit (), deskripsi(), gambar( )
// const data_users = [
//     { id: 1, name: "Rafif", alamat: "Vegas" },
//     { id: 2, name: "Dzaky", alamat: "Los Angeles" },
//     { id: 3, name: "Azka", alamat: "Tokyo" },
//     { id: 4, name: "Laila", alamat: "Seoul" },
//     { id: 5, name: "Zaidan", alamat: "New York"},
// ];

// app.get("/users", (req, res) => {
//     const data = data_users;

//     let result = {
//         status: 200,
//         data: data,
//     };

//     res.json(result);
// });

// app.get("/users/:id", (req, res) => {
//     let id = parseInt(req.params.id);

//     let result;
//     const user = data_users.find((user) => user.id === id);
//     if (user) {
//         result = {
//         status: 200,
//         data: user,
//         };
//     }
//     res.json(result);
// });

// app.get("/users/:id", (req, res) => {
//     let id = parseInt(req.params.id);

//     let result;
//     const user = data_users.find((user) => user.id === id);
//     if (user) {
//         result = {
//         status: 200,
//         data: user,
//         };
//     } else {
//         result = {
//         status: 404,
//         Message: "tidak ada lur",
//         };
//     }
//     res.json(result);
// });

import { pool } from "../db.js";

export const getUsers = async (req, res) => {
  const { rows } = await pool.query("select * from users"); // guardamos las filas de usuarios

  res.json(rows);
};

export const getUser = async (req, res) => {
  const { id } = req.params;
  const { rows } = await pool.query(`select * from users where id = $1`, [id]);

  if (rows.length === 0) {
    return res.status(404).json({ message: "usuario no encontrado" });
  }

  res.json(rows[0]);
};

export const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;

  const { rows } = await pool.query(
    `insert into users (name, email) values ($1, $2) returning *;`,
    [name, email]
  );

  return res.json(rows);
  } catch (error) {
    console.log(error)

    if (error.code === '23505'){ // ese codigo de error significa que hay un objeto duplciado, el cual no se permite gracias a los parametros de la base de datos que creamos
        return res.status(409).json({message: "email ya existe"})
    }

    res.status(500).json(error)
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  const { rowCount } = await pool.query(`delete from users where id = $1`, [
    id,
  ]);

  if (rowCount === 0) {
    return res.status(404).json({ message: "usuario no encontrado" });
  }

  res.sendStatus(204).json({ message: "usuario eliminado" });
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  const { rows } = await pool.query(
    `update users set name = $1, email = $2 where id = $3 returning *`,
    [data.name, data.email, id]
  );

  return res.json(rows);
};

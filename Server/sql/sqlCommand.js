import db from "../db/db.js";
import { validateTable, validateColumns } from "../utils/validateSchema.js";

// Get all rows by key = value
export const getAllFromTable = async (table, key, value, exact = true) => {
  try {
    validateTable(table);
    validateColumns([key]);

    const cleanValue = String(value).trim();

    const query = exact
      ? `SELECT * FROM ${table} WHERE ${key} = $1`
      : `SELECT * FROM ${table} WHERE LOWER(${key}) LIKE LOWER('%' || $1 || '%')`;

    const result = await db.query(query, [cleanValue]);
    return result.rows;
  } catch (error) {
    console.error("getAllFromTable error:", error);
    throw error;
  }
};

// Get specific columns
export const getColFromTable = async (columns, table) => {
  try {
    validateTable(table);
    validateColumns(columns);

    const query = `SELECT ${columns.join(", ")} FROM ${table}`;
    const result = await db.query(query);
    return result.rows;
  } catch (error) {
    console.error("getColFromTable error:", error);
    throw error;
  }
};

// Get single row by ID
export const getById = async (id, table) => {
  try {
    validateTable(table);
    const result = await db.query(`SELECT * FROM ${table} WHERE id = $1`, [id]);
    return result.rows[0];
  } catch (error) {
    console.error("getById error:", error);
    throw error;
  }
};

// Add new row with dynamic fields
export const addValuesInTable = async ({ table, data }) => {
  validateTable(table);

  const columns = Object.keys(data);
  const values = Object.values(data);

  validateColumns(columns);

  const placeholders = values.map((_, i) => `$${i + 1}`).join(", ");
  const query = `INSERT INTO ${table} (${columns.join(
    ", "
  )}) VALUES (${placeholders}) RETURNING *`;

  try {
    const result = await db.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.error("Insert Error:", error);
    throw error;
  }
};

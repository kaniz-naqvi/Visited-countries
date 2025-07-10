import dotenv from "dotenv";
import { compare, hash } from "bcrypt";
import { addValuesInTable, getAllFromTable } from "../sql/sqlCommand.js";
import e from "express";
dotenv.config();
const allowedTables = ["users", "visited_countries"];
const allowedColumns = ["*", "id", "user_name", "email", "country_code"];
const saltRounds = 7;

export const loginUser = async (req, res) => {
  const { password, email } = req.body;

  if (!password || !email)
    return res.status(400).json({ message: "Email and Pasword are required!" });
  try {
    const users = await getAllFromTable("users", "email", email);
    const user = users[0];
    if (users.length === 0)
      return res.status(401).json({ message: "User not found!" });
    const isMatch = await compare(password, user.password);
    if (isMatch) {
      return res.status(200).json({ message: "success", user: user });
    } else {
      return res.status(400).json({ message: "Wrong password, try again!" });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const signinUser = async (req, res) => {
  try {
    const { name, password, email } = req.body;
    if (!name || !password || !email)
      return res
        .status(400)
        .json({ message: "Name, Email, Pasword all are required!" });
    const checkExist = await getAllFromTable("users", "email", email);
    const doesExist = checkExist?.length > 0;

    if (doesExist) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await hash(password, saltRounds);
    const newUser = await addValuesInTable({
      table: "users",
      data: {
        user_name: name,
        password: hashedPassword,
        email: email,
      },
    });

    return res
      .status(201)
      .json({ message: "User added successfully", user: newUser });
  } catch (error) {
    console.error("Signin Error:", error);
    return res.status(500).json({ message: "Server error", error });
  }
};

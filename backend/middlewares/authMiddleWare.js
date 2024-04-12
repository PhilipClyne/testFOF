import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import asynceHandler from "./asynceHandle.js";

const authenticate = asynceHandler(async (req, res, next) => {
  let token;

  token = req.cookies.jwt;
  if (token) {
    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decode.userId).select("-password");
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
  //Read JWT  from the 'jwt' cookie
});

const authorizeAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).send("Not authorized as an admin");
  }
};
const getAllUsers = asynceHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

export { authenticate, authorizeAdmin, getAllUsers };

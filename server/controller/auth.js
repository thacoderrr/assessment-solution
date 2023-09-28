const User = require("../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

// const handleError = (err) => {
//   const error = new Error(err);
//   error.httpStatusCode = 500;
//   return next(error);
// };

exports.postLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const lowerCaseEmail = email.toLowerCase();

    // Find the user by email
    const user = await User.findOne({ email: lowerCaseEmail });

    if (!user) {
      return res.status(401).json({
        status: false,
        message: "User does not exist in our database",
      });
    }

    // Compare the provided password with the stored hashed password
    const doMatch = bcrypt.compare(password, user.password);

    if (!doMatch) {
      return res.status(401).json({
        status: false,
        accessToken: null,
        user: null,
        message: "Password is not correct, try again!",
      });
    }

    // Generate a JWT token for authentication
    const token = jwt.sign(
      { id: user._id.toString() },
      process.env.SECRET,
      { expiresIn: "30d" } // Set your desired token expiration time
    );

    // Respond with the token and user information
    res.status(200).json({
      status: true,
      token: token,
      user: {
        userId: user._id.toString(),
        firstName: user.firstname,
        lastName: user.lastname,
        email: user.email,
        role: user.role,
      },
      message: "Login Successful",
    });
  } catch (err) {
   
   console.log(err, res);
  }
};

exports.postSignup = async (req, res, next) => {
  const { lname, fname, email, password } = req.body;
  console.log(lname, fname, email, password);
  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists in our database" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({
      email: email.toLowerCase(),
      password: hashedPassword,
      firstname: fname,
      lastname: lname,
    });

    await newUser.save();
    console.log("new user saved");
    return res.status(200).json({
      message: "User created",
      status: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
exports.sendHealth = (req, res, next) => {
  res.sendStatus(200);
};
exports.logout = (req, res, next) => {
  res.set("Authorization", "");
  // send a response back to the client
};

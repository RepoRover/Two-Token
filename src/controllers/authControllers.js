import User from "../models/userModel";
import catchAsync from "../helpers/catchAsync";
import AppError from "../helpers/AppError";

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(username, password);

    const token = req.headers.authorization;
    console.log(token);

    res.status(200).json({ status: "Successful login" });
  } catch (error) {
    console.log(error);
  }
};

export const signup = catchAsync(async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return next(new AppError("No username or password provided!", 400));
    }

    const newUser = new User({
      username,
      password,
    });

    await newUser.save();

    res.status(200).json({ status: "Success" });
  } catch (error) {
    console.log(error);
  }
});

// token = req.headers.authorization.split(' ')[1];

import jwt from "jsonwebtoken";
import catchAsync from "./catchAsync";
import APIError from "./APIError";
import findUser from "./user_helpers/findUser";

const protect = catchAsync(async (req, res, next) => {
  let accessToken;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    accessToken = req.headers.authorization.split(" ")[1];
  }

  if (!accessToken) {
    return next(new APIError("No token provided.", 403));
  }

  let userId;
  jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return next(new APIError("Invalid token.", 403));
    }
    userId = decoded.user_id;
    console.log(decoded.rndm);
  });

  const user = await findUser({ user_id: userId });

  if (!user) {
    return next(new APIError("No user found with issued id.", 403));
  }

  jwt.verify(
    user.refresh_token,
    process.env.REFRESH_TOKEN_SECRET,
    (err, decoded) => {
      if (err) {
        return next(new APIError("Invalid token.", 403));
      }
      console.log(decoded.rndm);
    }
  );
  req.user = user;
  next();
});

export default protect;

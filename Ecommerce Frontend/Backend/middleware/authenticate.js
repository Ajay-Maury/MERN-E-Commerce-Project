require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
      if (err) return reject(err);

      return resolve(decoded);
    });
  });
};

export const authenticate = async (req, res, next) => {
  if (!req.headers.authorization)
    return res
      .status(400)
      .send({ message: "Authorization token not found or incorrect" });

  if (!req.headers.authorization.startsWith("Bearer "))
    return res
      .status(400)
      .send({ message: "Authorization token not found or incorrect" });

  const token = req.headers.authorization.trim().split(" ")[1];

  let decoded;
  try {
    decoded = await verifyToken(token);
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .send({ message: "Authorization token not found or incorrect" });
  }

  // console.log(decoded);

  req.user = decoded.user;

  return next();
};

export const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          `Role : ${req.user.role} is not allowed to access this resource.`,
          403
        )
      );
    }
    next();
  };
};

// module.exports = authenticate;

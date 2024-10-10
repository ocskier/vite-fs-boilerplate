import { GraphQLError } from "graphql";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET_KEY;

const utils = {
  verifyToken({ req }) {
    const token = req.headers.authorization || "";
    if (!token) {
      throw new GraphQLError("Invalid token", {
        extensions: {
          code: "UNAUTHENTICATED",
          http: { status: 401 },
        },
      });
    }
    try {
      const { user } = jwt.verify(token, JWT_SECRET);
      req.user = user;
      return req;
    } catch (err) {
      throw new GraphQLError("Error validating token", {
        extensions: {
          code: "FORBIDDEN",
          http: { status: 403 },
        },
      });
    }
  },
};

export default utils;

import express from "express";
import passport from "../Config/passport.js";
import User from "../models/User.js";

const router = express.Router();

// SIGNUP
router.post("/signup", async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    if (!username?.trim() || !email?.trim() || !password) {
      return res.status(400).json({
        message: "Username, email, and password are required",
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        message: "Password must be at least 8 characters",
      });
    }

    const user = new User({
      username: username.trim(),
      email: email.trim().toLowerCase(),
    });

    await User.register(user, password);

    req.logIn(user, (error) => {
      if (error) return next(error);

      res.status(201).json({
        message: "Signup successful",
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
        },
      });
    });
  } catch (error) {
    if (error.name === "UserExistsError" || error.code === 11000) {
      return res.status(409).json({
        message: "Email is already registered",
      });
    }

    next(error);
  }
});

// LOGIN
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (error, user, info) => {
    if (error) return next(error);

    if (!user) {
      return res.status(401).json({
        message: info?.message || "Invalid email or password",
      });
    }

    req.logIn(user, (loginError) => {
      if (loginError) return next(loginError);

      res.json({
        message: "Login successful",
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
        },
      });
    });
  })(req, res, next);
});

// CURRENT USER
router.get("/me", (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({
      message: "Not authenticated",
    });
  }

  res.json({
    user: {
      id: req.user.id,
      username: req.user.username,
      email: req.user.email,
    },
  });
});

// LOGOUT
router.post("/logout", (req, res, next) => {
  req.logout((error) => {
    if (error) return next(error);

    req.session.destroy((sessionError) => {
      if (sessionError) return next(sessionError);

      res.clearCookie("connect.sid", { path: "/" });
      res.json({ message: "Logout successful" });
    });
  });
});

export default router;

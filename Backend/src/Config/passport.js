import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import User from "./src/models/user.models.js";

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

export default passport;
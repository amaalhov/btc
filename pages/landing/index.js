import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import SignIn from "@/app/components/landingPage/signin";
import SignUp from "@/app/components/landingPage/signup";

const LandingPage = () => {
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);

  const handleOpenSignIn = () => {
    setOpenSignIn(true);
  };

  const handleOpenSignUp = () => {
    setOpenSignUp(true);
  };

  const handleCloseSignIn = () => {
    setOpenSignIn(false);
  };

  const handleCloseSignUp = () => {
    setOpenSignUp(false);
  };

  // Add the sign-in and sign-up forms here
  const SignInForm = () => <SignIn />;

  const SignUpForm = () => <SignUp />;

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Health Inventory System
          </Typography>
          <Button color="inherit" onClick={handleOpenSignIn}>
            Sign In
          </Button>
          <Button color="inherit" onClick={handleOpenSignUp}>
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>

      {/* Sign In Dialog */}
      <Dialog open={openSignIn} onClose={handleCloseSignIn}>
        <DialogTitle>Sign In</DialogTitle>
        <DialogContent>
          <SignInForm />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSignIn}>Cancel</Button>
          <Button onClick={handleCloseSignIn}>Sign In</Button>
        </DialogActions>
      </Dialog>

      {/* Sign Up Dialog */}
      <Dialog open={openSignUp} onClose={handleCloseSignUp}>
        <DialogTitle>Sign Up</DialogTitle>
        <DialogContent>
          <SignUpForm />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSignUp}>Cancel</Button>
          <Button onClick={handleCloseSignUp}>Sign Up</Button>
        </DialogActions>
      </Dialog>

      {/* Rest of the landing page content */}
      {/* ... */}
    </>
  );
};

export default LandingPage;

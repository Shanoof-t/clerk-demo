import { SignUp } from "@clerk/clerk-react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const { isSignedIn, isLoaded } = useUser();
  const navigate = useNavigate();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (isSignedIn) {
    return navigate("/");
  }

  return <SignUp />;
}

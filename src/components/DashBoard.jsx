import { UserButton, useUser } from "@clerk/clerk-react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function DashBoard() {
  const { isLoaded, isSignedIn, user } = useUser();
  const navigate = useNavigate();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    navigate("/sign-in");
    return;
  }

  return (
    <div id="dashboard">
      <div>
        <h1>Welcome, {user.firstName}</h1>
      </div>
      <UserButton />
    </div>
  );
}

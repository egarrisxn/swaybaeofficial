"use client";
import React, { useState } from "react";
import LoginContainer from "../../components/LoginContainer";

export default function Login() {
  useState();
  return (
    <main>
      <div className="container flex flex-col place-items-center content-center justify-center">
        <LoginContainer />
      </div>
    </main>
  );
}

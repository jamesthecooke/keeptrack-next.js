"use client";
import React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Card = () => {
  const { status, data: session } = useSession();

  return (
    <div>
      {status === "loading" && <div>loading...</div>}
      {status === "authenticated" && <div>{session.user!.name}</div>}
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin">Login</Link>
      )}
    </div>
  );
};

export default Card;

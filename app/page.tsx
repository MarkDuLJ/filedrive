"use client"
import { SignInButton, SignedIn, SignOutButton, SignedOut } from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";

export default function Home() {
  const createFile = useMutation(api.file1.createFile)
  const files = useQuery(api.file1.getFiles)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignedIn>
        <SignOutButton>Sign out</SignOutButton>
      </SignedIn>
      <SignedOut>
        <SignInButton>Sign in</SignInButton>
      </SignedOut>
      {
        files?.map(file=>(
          <div>{file.name}</div>
        ))
      }
      <Button onClick={()=>{
        createFile({
          name:"hello"
        })
      }}>Click</Button>
    </main>
  );
}

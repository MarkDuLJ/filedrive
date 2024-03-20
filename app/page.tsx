import { SignInButton, SignedIn, SignOutButton, SignedOut } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignedIn>
        <SignOutButton>Sign out</SignOutButton>
      </SignedIn>
      <SignedOut>
        <SignInButton>Sign in</SignInButton>
      </SignedOut>
    </main>
  );
}

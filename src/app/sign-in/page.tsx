import type { Metadata } from "next";
import Link from "next/link";

import { AuthShell } from "@/components/auth/auth-shell";
import { SignInForm } from "@/components/auth/sign-in-form";

export const metadata: Metadata = {
  title: "Sign in · Relay",
  description: "Sign in to your Relay workspace.",
};

export default function SignInPage() {
  return (
    <AuthShell
      title="Welcome back"
      subtitle="Sign in to your Relay workspace."
      footer={
        <>
          New to Relay?{" "}
          <Link
            href="/get-started"
            className="font-medium text-brand transition-colors hover:text-emerald-300"
          >
            Create an account
          </Link>
        </>
      }
    >
      <SignInForm />
    </AuthShell>
  );
}

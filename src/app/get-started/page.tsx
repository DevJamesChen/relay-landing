import type { Metadata } from "next";
import Link from "next/link";

import { AuthShell } from "@/components/auth/auth-shell";
import { GetStartedForm } from "@/components/auth/get-started-form";

export const metadata: Metadata = {
  title: "Get started · Relay",
  description: "Create your Relay account and start building in minutes.",
};

export default async function GetStartedPage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string }>;
}) {
  const { plan } = await searchParams;

  return (
    <AuthShell
      title="Create your account"
      subtitle="Start building with Relay in under five minutes."
      footer={
        <>
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="font-medium text-brand transition-colors hover:text-emerald-300"
          >
            Sign in
          </Link>
        </>
      }
    >
      <GetStartedForm plan={plan} />
    </AuthShell>
  );
}

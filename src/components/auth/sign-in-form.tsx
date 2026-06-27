"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Eye, EyeOff, Loader2 } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AuthDivider, AuthSuccess, OAuthButtons } from "@/components/auth/auth-ui";

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");
  const [method, setMethod] = useState<"email" | "GitHub" | "Google">("email");

  function finish(via: "email" | "GitHub" | "Google") {
    setMethod(via);
    setStatus("loading");
    window.setTimeout(() => setStatus("done"), 1000);
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!EMAIL_RE.test(email)) {
      setError("Enter a valid email address.");
      return;
    }
    if (!password) {
      setError("Enter your password.");
      return;
    }
    setError("");
    finish("email");
  }

  if (status === "done") {
    return (
      <AuthSuccess heading="You're signed in">
        {method === "email" ? (
          <>
            Welcome back. We sent a secure sign-in link to{" "}
            <span className="text-foreground">{email}</span> to confirm this
            device.
          </>
        ) : (
          <>Authenticated with {method}. Redirecting to your workspace…</>
        )}
      </AuthSuccess>
    );
  }

  const busy = status === "loading";

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <OAuthButtons onProvider={finish} disabled={busy} />
      <AuthDivider label="or continue with email" />

      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
          value={email}
          disabled={busy}
          onChange={(e) => setEmail(e.target.value)}
          className="h-10"
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password">Password</Label>
          <Link
            href="/sign-in"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Forgot password?
          </Link>
        </div>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            placeholder="••••••••"
            value={password}
            disabled={busy}
            onChange={(e) => setPassword(e.target.value)}
            className="h-10 pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
          >
            {showPassword ? (
              <EyeOff className="size-4" />
            ) : (
              <Eye className="size-4" />
            )}
          </button>
        </div>
      </div>

      {error ? <p className="text-xs text-destructive">{error}</p> : null}

      <button
        type="submit"
        disabled={busy}
        className={cn(
          buttonVariants({ variant: "default" }),
          "h-10 rounded-full transition-transform hover:-translate-y-0.5",
        )}
      >
        {busy ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Signing in…
          </>
        ) : (
          <>
            Sign in
            <ArrowRight className="size-4" />
          </>
        )}
      </button>
    </form>
  );
}

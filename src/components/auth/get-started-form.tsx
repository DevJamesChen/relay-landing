"use client";

import { useState } from "react";
import { ArrowRight, Eye, EyeOff, Loader2 } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AuthDivider, AuthSuccess, OAuthButtons } from "@/components/auth/auth-ui";

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

const planLabels: Record<string, string> = {
  hobby: "Hobby",
  pro: "Pro",
  enterprise: "Enterprise",
};

export function GetStartedForm({ plan }: { plan?: string }) {
  const planLabel = plan ? planLabels[plan.toLowerCase()] : undefined;

  const [name, setName] = useState("");
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
    if (name.trim().length < 2) {
      setError("Tell us your name.");
      return;
    }
    if (!EMAIL_RE.test(email)) {
      setError("Enter a valid work email address.");
      return;
    }
    if (password.length < 8) {
      setError("Use at least 8 characters for your password.");
      return;
    }
    setError("");
    finish("email");
  }

  if (status === "done") {
    return (
      <AuthSuccess heading="Check your inbox">
        {method === "email" ? (
          <>
            We sent a verification link to{" "}
            <span className="text-foreground">{email}</span>. Confirm it to
            activate your {planLabel ?? "Relay"} workspace.
          </>
        ) : (
          <>Account created with {method}. Setting up your workspace…</>
        )}
      </AuthSuccess>
    );
  }

  const busy = status === "loading";

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      {planLabel ? (
        <div className="flex items-center justify-between rounded-lg border border-brand/30 bg-brand/[0.06] px-3 py-2 text-xs">
          <span className="text-muted-foreground">Selected plan</span>
          <span className="font-medium text-brand">{planLabel}</span>
        </div>
      ) : null}

      <OAuthButtons onProvider={finish} disabled={busy} />
      <AuthDivider label="or sign up with email" />

      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Full name</Label>
        <Input
          id="name"
          autoComplete="name"
          placeholder="Ada Lovelace"
          value={name}
          disabled={busy}
          onChange={(e) => setName(e.target.value)}
          className="h-10"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Work email</Label>
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
        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            autoComplete="new-password"
            placeholder="At least 8 characters"
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
            Creating account…
          </>
        ) : (
          <>
            Create account
            <ArrowRight className="size-4" />
          </>
        )}
      </button>

      <p className="text-center text-xs leading-relaxed text-muted-foreground">
        By creating an account you agree to Relay&apos;s{" "}
        <a href="#" className="underline underline-offset-2 hover:text-foreground">
          Terms
        </a>{" "}
        and{" "}
        <a href="#" className="underline underline-offset-2 hover:text-foreground">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}

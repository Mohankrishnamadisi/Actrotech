"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { showError } from "@/lib/alerts";
import { supabase } from "@/lib/supabaseClient";
import Swal from "sweetalert2";

const getEmailProviderUrl = (email: string): string => {
  const normalized = email.trim().toLowerCase();

  if (normalized.includes("@gmail.com")) {
    return "https://mail.google.com";
  }

  if (
    normalized.includes("@outlook.com") ||
    normalized.includes("@hotmail.com") ||
    normalized.includes("@live.com") ||
    normalized.includes("@msn.com")
  ) {
    return "https://outlook.live.com/mail";
  }

  if (normalized.includes("@yahoo.com") || normalized.includes("@ymail.com")) {
    return "https://mail.yahoo.com";
  }

  return "https://mail.google.com";
};

const openMailProvider = (email: string) => {
  const url = getEmailProviderUrl(email);
  window.open(url, "_blank", "noopener,noreferrer");
};

const SignupPage = () => {
  const router = useRouter();
  const [displayName, setDisplayName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!displayName || !phone || !email || !password) {
      showError("All fields are required.");
      return;
    }

    setLoading(true);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          display_name: displayName,
          phone,
        },
      },
    });

    if (error) {
      showError(error.message);
      setLoading(false);
      return;
    }

    const result = await Swal.fire({
      icon: "success",
      title: "Verify Your Email 📩",
      html: `A verification link has been sent to <strong>${email}</strong>.<br/>Please verify your email before signing in.<br/><small>If you don’t see the email, check your spam folder.</small>`,
      showCancelButton: true,
      confirmButtonText: "Open Mail",
      cancelButtonText: "Go to Sign In",
      focusConfirm: true,
      allowOutsideClick: false,
      allowEscapeKey: false,
      customClass: {
        popup: "swal2-popup",
      },
    });

    if (result.isConfirmed) {
      openMailProvider(email);
    }

    setDisplayName("");
    setPhone("");
    setEmail("");
    setPassword("");

    router.push("/signin");
    setLoading(false);
  };

  return (
    <>
      <section className="relative z-10 overflow-hidden pt-36 pb-16 md:pb-20 lg:pt-[180px] lg:pb-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="shadow-three dark:bg-dark mx-auto max-w-[500px] rounded-sm bg-white px-6 py-10 sm:p-[60px]">
                <h3 className="mb-3 text-center text-2xl font-bold text-black sm:text-3xl dark:text-white">
                  Create your account
                </h3>
                <p className="text-body-color mb-11 text-center text-base font-medium">
                  It’s totally free and super easy
                </p>
                <form onSubmit={handleSignUp}>
                  <div className="mb-8">
                    <label
                      htmlFor="displayName"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      Display Name
                    </label>
                    <input
                      type="text"
                      name="displayName"
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      placeholder="Enter your Display Name"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B]"
                    />
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="phone"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter your Phone Number"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B]"
                    />
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="email"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your Email"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B]"
                    />
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="password"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      Your Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your Password"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B]"
                    />
                  </div>
                  <div className="mb-6">
                    <button
                      type="submit"
                      disabled={loading}
                      className="shadow-submit dark:shadow-submit-dark flex w-full items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90 disabled:opacity-50"
                    >
                      {loading ? "Signing Up..." : "Sign Up"}
                    </button>
                  </div>
                </form>
                <p className="text-center text-base font-medium text-body-color">
                  Already have an account?{" "}
                  <Link href="/signin" className="text-primary hover:underline">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 z-[-1]">
          <svg
            width="1440"
            height="969"
            viewBox="0 0 1440 969"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_95:1005"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="1440"
              height="969"
            >
              <rect width="1440" height="969" fill="#090E34" />
            </mask>
            <g mask="url(#mask0_95:1005)">
              <path
                opacity="0.1"
                d="M1086.96 297.978L632.959 554.978L935.625 535.926L1086.96 297.978Z"
                fill="url(#paint0_linear_95:1005)"
              />
              <path
                opacity="0.1"
                d="M1324.5 755.5L1450 687V886.5L1324.5 967.5L-10 288L1324.5 755.5Z"
                fill="url(#paint1_linear_95:1005)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_95:1005"
                x1="1178.4"
                y1="151.853"
                x2="780.959"
                y2="453.581"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_95:1005"
                x1="160.5"
                y1="220"
                x2="1099.45"
                y2="1192.04"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default SignupPage;

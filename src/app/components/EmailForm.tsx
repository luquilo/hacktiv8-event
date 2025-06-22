"use client";

import { useState } from "react";

type Props = {
  registration: string;
};

export default function EmailForm({ registration }: Props) {
  const [email, setEmail] = useState<string>("");
  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isSubmitted) {
      setIsSubmitted(false);
    }
    setEmail(e.target.value);
    // clear form error message on new input
    if (formError) {
      setFormError(null);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      setFormError("Valid email address is required");
      setIsSubmitted(false);
      return;
    }

    if (validateEmail(email)) {
      // on successful validation
      setFormError(null);
      setIsSubmitted(true);
      // send the email to backend
    } else {
      // on failed validation
      setFormError("Please enter a valid email address");
      setIsSubmitted(false);
    }
  };

  return (
    <div>
      {isSubmitted ? (
        <>
          <p className="text-2xl text-bold">Reminder berhasil diaktifkan!</p>
          <p>
            Kami akan ingatkan kamu melalui email satu hari sebelum event
            dimulai.
          </p>
        </>
      ) : (
        <>
          <p className="mb-4 text-xl font-bold">Ingatkan Saya</p>
          <p>Masukkan Email untuk menerima pengingat</p>
          <div className="p-3 my-4 text-sm text-yellow-800 bg-yellow-100 rounded-lg">
            <p>
              ⚠️ Pastikan anda telah mendaftar di website resminya{" "}
              <a
                href={`https://${registration}`}
                className="font-semibold text-blue-600"
                target="_blank"
              >
                disini
              </a>
              !
            </p>
          </div>
          <label className="flex items-center justify-center gap-2 mb-2 cursor-pointer">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            <span>Saya sudah mendaftar di link registrasi resmi</span>
          </label>
          {!isChecked && (
            <p className="mb-2 text-sm text-red-400">
              Mohon centang kotak di atas
            </p>
          )}
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-4">
              <label htmlFor="email" className="sr-only">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="you@gmail.com"
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition-colors duration-300 ${
                  formError
                    ? "border-red-500 focus:ring-red-500"
                    : "border-orange-200 focus:border-orange-400 focus:ring-orange-400"
                }`}
                aria-invalid={!!formError}
                aria-describedby="email-error"
              />
              {formError && (
                <p
                  id="email-error"
                  className="mt-2 text-sm text-red-400"
                  role="alert"
                >
                  {formError}
                </p>
              )}
            </div>
            <button
              disabled={!isChecked}
              type="submit"
              className="w-full bg-orange-400 cursor-pointer text-white font-bold py-3 px-4 rounded-lg hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-blue-500 transition-transform transform hover:translate-y-[-2px] active:translate-y-0"
            >
              Submit
            </button>
          </form>
        </>
      )}
    </div>
  );
}

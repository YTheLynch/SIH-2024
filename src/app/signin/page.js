"use client"

import Link from "next/link"
import React, { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()
  const [user, setUser] = React.useState({
    email: "",
    password: ""
  })

  const [buttonDisabled, setButtonDisabled] = React.useState(true)
  const [loading, setLoading] = React.useState(false)

  const onLogin = () => {
    router.push("/home")
  }

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  }, [user])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Form Wrapper */}
      <div className="bg-red-600 p-8 rounded-3xl shadow-md w-full max-w-md">
        <h1 className="text-4xl font-bold text-center text-white- mb-6">
          {loading ? "We're logging you in..." : "Sign In"}
        </h1>

        {/* Email Input */}
        <input
          className="w-full p-3 mb-4 bg-white text-white border border-red-300 rounded-md focus:outline-none focus:border-red-500"
          id="email"
          type="email"
          value={user.email}
          onChange={e => setUser({ ...user, email: e.target.value })}
          placeholder="Enter Your Email..."
        />

        {/* Password Input */}
        <input
          className="w-full p-3 mb-4 bg-white text-red-800 border border-red-300 rounded-lg focus:outline-none focus:border-red-500"
          id="password"
          type="password"
          value={user.password}
          onChange={e => setUser({ ...user, password: e.target.value })}
          placeholder="Enter Your Password..."
        />

        {/* Login Button */}
        <button
          onClick={onLogin}
          className={`w-full p-3 text-white font-bold rounded-lg transition-colors ${
            buttonDisabled
              ? "bg-red-300 cursor-not-allowed"
              : "bg-red-600 hover:bg-red-500"
          }`}
          disabled={buttonDisabled}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* Register Link */}
        <div className="mt-6 text-center">
          <Link href="/signup">
            <p className="text-white">
              Don't have an account? Sign up{" "}
              <span className="text-red-600 font-semibold hover:underline">
                Register
              </span>
            </p>
          </Link>
        </div>
      </div>

      {/* Go Back Link */}
      <Link href="/">
        <p className="mt-8 rounded-full text-red-600">Go Back</p>
      </Link>
    </div>
  )
}

import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <section className="flex-1 flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-pink-50 px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8">
          
          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">📝</div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Create Account
            </h2>
            <p className="text-gray-500 mt-1">Join our community</p>
          </div>

          {/* Form */}
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm
                           placeholder-gray-400
                           focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                           transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder=""
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm
                           placeholder-gray-400
                           focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                           transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder=""
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm
                           placeholder-gray-400
                           focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                           transition-all duration-300"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 py-3 text-white font-semibold
                         hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]
                         transition-all duration-300"
            >
              Create Account
            </button>
          </form>

          {/* Footer */}
          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-purple-600 hover:text-pink-600 hover:underline transition-colors"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
import { AdminLoginForm } from "@/components/auth/admin-login-form"

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          {/* Left side - Login Form */}
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <AdminLoginForm />
          </div>

          {/* Right side - Dashboard Preview with 3D Background */}
          <div className="hidden lg:block relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-8 overflow-hidden">
            {/* 3D Geometric Background */}
            <div className="absolute inset-0">
              {/* Large background cubes */}
              <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-blue-600/30 rounded-2xl transform rotate-12 blur-sm"></div>
              <div className="absolute top-32 right-32 w-32 h-32 bg-gradient-to-br from-purple-400/25 to-purple-600/35 rounded-2xl transform -rotate-12"></div>
              <div className="absolute bottom-20 right-5 w-48 h-48 bg-gradient-to-br from-indigo-400/15 to-indigo-600/25 rounded-3xl transform rotate-45"></div>
              <div className="absolute bottom-40 right-28 w-24 h-24 bg-gradient-to-br from-blue-300/30 to-blue-500/40 rounded-xl transform -rotate-30"></div>
              <div className="absolute top-60 right-60 w-20 h-20 bg-gradient-to-br from-purple-300/35 to-purple-500/45 rounded-lg transform rotate-30"></div>

              {/* Medium cubes */}
              <div className="absolute top-20 right-48 w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-cyan-600/30 rounded-lg transform rotate-45"></div>
              <div className="absolute bottom-60 right-12 w-28 h-28 bg-gradient-to-br from-violet-400/25 to-violet-600/35 rounded-xl transform -rotate-15"></div>

              {/* Small accent cubes */}
              <div className="absolute top-44 right-20 w-12 h-12 bg-gradient-to-br from-pink-400/30 to-pink-600/40 rounded-md transform rotate-60"></div>
              <div className="absolute bottom-32 right-44 w-14 h-14 bg-gradient-to-br from-teal-400/25 to-teal-600/35 rounded-lg transform -rotate-45"></div>
            </div>

            {/* Dashboard Preview Content */}
            <div className="relative z-10 h-full flex flex-col justify-center space-y-6">
              {/* Revenue Chart Preview */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-gray-600">Total revenue</h3>
                  <div className="text-2xl font-bold text-gray-900">$354,320</div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="relative w-24 h-24">
                    <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="2"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="2"
                        strokeDasharray="60, 100"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#8b5cf6"
                        strokeWidth="2"
                        strokeDasharray="25, 100"
                        strokeDashoffset="-60"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="2"
                        strokeDasharray="15, 100"
                        strokeDashoffset="-85"
                      />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Spotify</span>
                      <span className="text-sm font-medium">60%</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">Apple</span>
                      <span className="text-sm font-medium">25%</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">YouTube</span>
                      <span className="text-sm font-medium">15%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* User Profile Preview */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium text-sm">AD</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Admin User</div>
                    <div className="text-sm text-gray-500">admin@musicplatform.com</div>
                  </div>
                </div>
              </div>

              {/* Stats Preview */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-white/20">
                  <div className="text-2xl font-bold text-gray-900">18.4K</div>
                  <div className="text-sm text-gray-500">Active Users</div>
                  <div className="text-xs text-green-500 mt-1">+12% this month</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-white/20">
                  <div className="text-2xl font-bold text-gray-900">2.8K</div>
                  <div className="text-sm text-gray-500">Releases</div>
                  <div className="text-xs text-blue-500 mt-1">+8% this month</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

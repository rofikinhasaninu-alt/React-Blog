import profilePic from "../assets/profile.jpg";
import StemBuilding from "../assets/stem.jpg";

export default function HomePage() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 py-12">
      
      {/* Hero Section */}
      <div className="max-w-4xl w-full bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20">
        <div className="flex flex-col md:flex-row items-center gap-8">
          
          {/* Profile Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <img 
              src={profilePic}
              alt="Profile"
              className="relative w-40 h-40 md:w-48 md:h-48 rounded-full shadow-2xl border-4 border-white object-cover"
            />
            <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2 shadow-lg border-2 border-white">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Welcome to My React-Blog! ✨
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              Hello! I'm learning <span className="font-bold text-blue-600 hover:text-purple-600 transition-colors">React</span> and building amazing web applications! 
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">React</span>
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">CSS</span>
              <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold">JavaScript</span>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="max-w-4xl w-full mt-8">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <img 
            src={StemBuilding}
            alt="STEM Building"
            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-2xl font-bold">STEM Building</h3>
            
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-4xl w-full grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        <div className="bg-white rounded-2xl p-4 text-center shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-3xl font-bold text-blue-600">100+</div>
          <div className="text-sm text-gray-600">Students</div>
        </div>
        <div className="bg-white rounded-2xl p-4 text-center shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-3xl font-bold text-purple-600">50+</div>
          <div className="text-sm text-gray-600">Projects</div>
        </div>
        <div className="bg-white rounded-2xl p-4 text-center shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-3xl font-bold text-pink-600">24/7</div>
          <div className="text-sm text-gray-600">Learning</div>
        </div>
        <div className="bg-white rounded-2xl p-4 text-center shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-3xl font-bold text-green-600">🚀</div>
          <div className="text-sm text-gray-600">Innovation</div>
        </div>
      </div>
    </main>
  );
}
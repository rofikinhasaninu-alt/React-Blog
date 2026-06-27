
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div > 
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              MyReact-Blog
            </h3>
            <p className="text-sm text-gray-400 mt-2">
              Building amazing web applications with React.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-300 mb-2">Connect</h4>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="https://www.facebook.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                Facebook
              </a>
              
              <a href="https://www.twitter.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                Twitter
              </a>
             
              <a href="https://www.instagram.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-6 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} My React App. ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}
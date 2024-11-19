export default function Navbar() {
    return (
      <nav className="w-full text-red-500 bg-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-lg font-bold">Swensen's</h1>
          <div>
            <a href="/login" className="mr-4 hover:underline">Login</a>
            <a href="/register" className="hover:underline">Register</a>
          </div>
        </div>
      </nav>
    );
  }
  
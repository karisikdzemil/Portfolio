
export default function Header () {

    return (
        <nav className="flex justify-between items-center px-8 py-4 bg-black text-gray-300">
        <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text">
          AR
        </div>
        <ul className="flex gap-6">
          <li className="hover:text-cyan-400 cursor-pointer">Home</li>
          <li className="hover:text-cyan-400 cursor-pointer">About</li>
          <li className="hover:text-cyan-400 cursor-pointer">Experience</li>
          <li className="hover:text-cyan-400 cursor-pointer">Skills</li>
          <li className="hover:text-cyan-400 cursor-pointer">Projects</li>
          <li className="hover:text-cyan-400 cursor-pointer">Testimonials</li>
          <li className="hover:text-cyan-400 cursor-pointer">Contact</li>
        </ul>
      </nav>
      
    )
}
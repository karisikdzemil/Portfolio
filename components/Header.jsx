
export default function Header () {

    return (
        <nav className="w-full flex justify-between items-center px-8 py-4 bg-black text-gray-300 fixed top-0 z-50">
        <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text">
          DzK
        </div>
        <ul className="flex gap-6">
        <li className="hover:text-cyan-400 cursor-pointer"> <a href="#home">Home </a></li>
          <li className="hover:text-cyan-400 cursor-pointer"> <a href="#about">About </a></li>
          <li className="hover:text-cyan-400 cursor-pointer"> <a href="#skills">Skills </a></li>
          <li className="hover:text-cyan-400 cursor-pointer"> <a href="#projects">Projects </a></li>
          <li className="hover:text-cyan-400 cursor-pointer"> <a href="#education">Edication </a></li>
          <li className="hover:text-cyan-400 cursor-pointer"> <a href="#contact">Contact </a></li>
        </ul>
      </nav>
      
    )
}
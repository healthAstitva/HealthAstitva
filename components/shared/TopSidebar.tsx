import Image from "next/image"
import Link from "next/link"


const TopSidebar = () => {


  return (
    <nav className="fixed top-0 flex items-center justify-start w-full bg-white text-black p-5 z-30">
        <Link href="/" className="flex items-center gap-3"> 
            <Image
            src="/assets/logo.svg"
            alt="Astitva logo"
            width={28}
            height={28}
            />
            <p className="text-lg font-bold">Astitva Health</p>
        
        </Link>
    </nav>
  )
}

export default TopSidebar
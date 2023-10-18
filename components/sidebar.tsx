"use client"
import Image from "next/image"
import { Button } from "./ui/button"
import { UserPlus } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"


export const Sidebar = () => {
    
    const pathname = usePathname()
    if(pathname.includes("/adduser")){
        console.log(pathname)
    }


    return(
    
        <div className="bg-[url('../public/assets/bgsidebar.png')] bg-blend-multiply w-72 fixed h-full text-primary bg-rose-500 z-20 text-rose-700 dark:bg-[#242529]   flex flex-col mt-[70px]">

            <div className={cn("m-2 rounded-md  text-xl mt-1  dark:bg-[#272133]", pathname.includes("/adduser") && "bg-white dark:bg-[#8b5df0] shadow-md shadow-gray-950 text-rose-500")}>
                <button onClick={() => {}} type="button" className="group px-6 py-6 rounded-md flex items-center gap-x-2 w-full hover:bg-rose-700/20 dark:hover:bg-zinc-700 transition mb-1">
                    <UserPlus />

                    <p > Add user</p>

                </button>
            </div>
            <div className={cn("w-full text-white text-xl  dark:bg-[#272133]", pathname.includes("/home") && "bg-rose-500 dark:bg-[#8b5df0] shadow-md shadow-gray-950 text-white")}>
                <button onClick={() => {}} type="button" className="group px-6 py-6 rounded-md flex items-center gap-x-2 w-full hover:bg-rose-700/20 dark:hover:bg-zinc-700 transition mb-1">
                    <UserPlus />

                    <p > Show Details</p>

                </button>
            </div>
           
            

        </div>
    
    )
}
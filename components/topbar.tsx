import { HeartPulse } from "lucide-react"

export const Topbar = () => {


    return(
        <div className="bg-[url('../public/assets/bgsidebar.png')] bg-blend-multiply w-full bg-rose-500 dark:bg-[#242529] text-white fixed z-30 flex h-[70px] items-center p-5 space-x-6 text-3xl">
            <HeartPulse className="w-9 h-9"/>
            <p>Astitva Health Care</p>

        </div>
    )

}
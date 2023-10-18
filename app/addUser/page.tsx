import { ListUser } from "@/components/List-user";
import { Sidebar } from "@/components/sidebar";
import { Topbar } from "@/components/topbar";



const AddUser = () => {


    return(
        <div>
            <Topbar />

        <Sidebar />
        <ListUser />
        </div>
    )
}

export default AddUser;
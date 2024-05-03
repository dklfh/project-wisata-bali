import AdminNav from "../component/adminNav"
import SidebarAdmin from "../component/sidebarAdmin"

function datawisata (){
    return(
        <section class="font-ibmflexmono flex flex-col h-screen bg-gray-100">
            <AdminNav title="Data Wisata"/>

            <div class="flex-1 flex flex-wrap">
            <SidebarAdmin/>
            </div>
            
        </section>
    )
}
export default datawisata
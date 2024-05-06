import {Link} from 'react-router-dom'
function sidebarAdmin (){
    return(
        <div class="p-2 bg-black w-full md:w-60 flex flex-col md:flex " id="sideNav">
            <nav>
                <Link to="/Admin" class="block text-white py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-500 hover:text-white">
                    <i class="fas fa-home mr-2"></i>Home
                </Link>
                <Link to="/DataWisata" class="block text-white py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-500 hover:text-white" href="#">
                    <i class="fas fa-file-alt mr-2"></i>Destination Data
                </Link>
            </nav>            
            <a class="block text-gray-500 py-2.5 px-4 my-2 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white mt-auto" href="#">
                
            </a>

            <div class="bg-gradient-to-r from-orange-300 to-orange-500 h-px mt-2"></div>

            
            <p class="mb-1 px-5 py-3 text-left text-xs text-orange-500 ">Copyright By GogoBali Team</p>

        </div>
    )
}
export default sidebarAdmin
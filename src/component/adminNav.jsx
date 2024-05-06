import logo from "../img/logo goBali.png";
function adminNav({title}) {
  return (
    <div>
      <div class="bg-black-bg bg-opacity-90 text-white shadow w-full p-5 flex items-center justify-between">
        <div class="flex items-center justify-center">
          <div class="flex items-center">
            <img src={logo} alt="Logo" class="w-28 h-18 mr-2" />
            <h2 class="font-bold text-xl text-white">{title}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
export default adminNav;

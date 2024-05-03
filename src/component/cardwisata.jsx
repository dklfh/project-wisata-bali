import uluwatu from "../img/uluwatu.jpg";
function cardwisata() {
  return (
    <div class="flex flex-col items-center gap-3 p-4 border-2 rounded-lg border-white max-w-md min-h-96">
      <div class="flex flex-col gap-0 items-center">
        <img src={uluwatu} alt="uluwatu"></img>
        <h1 class="text-white font-semibold leading-6 text-lg">
          Uluwatu Beach
        </h1>
        <p class="text-orange-500 text-sm font-medium">
          Pecatu, Kabupaten Badung
        </p>
      </div>
      <p class="text-xs text-white font-normal text-justify">
        Uluwatu Beach is a stunning coastal destination located on the southern
        tip of Bali, Indonesia. Known for its dramatic cliffs, pristine white
        sand, and crystal-clear turquoise waters, it's a haven for
      </p>
      <button class="text-white px-5 py-2 bg-button-bg font-bold rounded">
        View More
      </button>
    </div>
  );
}
export default cardwisata;

function formdata() {
  return (
    <div class="">
      <section class="rounded-md p-2 bg-white">
        <div class="flex items-center justify-center my-3">
          <div class="xl:mx-auto shadow-md p-4 xl:w-full xl:max-w-sm 2xl:max-w-md">
            <div class="mb-2"></div>
            <h2 class="text-2xl font-bold leading-tight">
              Add Data Wisata
            </h2>
            <form class="mt-5">
              <div class="space-y-4">
                <div>
                  <label class="text-base font-medium text-gray-900">
                    Title of Destination
                  </label>
                  <div class="mt-2">
                    <input
                      placeholder="Title"
                      type="text"
                      class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      name="user_name"
                    />
                  </div>
                </div>

                <div>
                  <label class="text-base font-medium text-gray-900">
                    Add Location
                  </label>
                  <div class="mt-2">
                    <input
                      placeholder="Location"
                      type="email"
                      class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      name="email"
                    />
                  </div>
                </div>
                
                <div>
                  <div class="flex items-center justify-between">
                    <label class="text-base font-medium text-gray-900">
                      Add Description
                    </label>
                  </div>
                  <div class="mt-2">
                    <input
                      placeholder="Description"
                      type="password"
                      class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      name="password"
                    />
                  </div>
                  <div class="flex items-center justify-between mt-3">
                    <label class="text-base font-medium text-gray-900">
                      Destination Picture
                    </label>
                  </div>
                  <div class="mt-2">
                    <input
                      class="file-input w-full max-w-xs"
                      type="file"
                      name="avatar"
                    />
                  </div>
                </div>
                <div>
                  <button
                    class="inline-flex w-full items-center justify-center rounded-md bg-button-bg px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-orange-3x00"
                    type="button"
                  >
                    Add Data
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
export default formdata;

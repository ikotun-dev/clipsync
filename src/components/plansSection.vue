<template>
  <div class="flex justify-center">
    <div
      class="flex flex-col md:flex md:flex-row md:justify-between md:space-x-10 lg:flex lg:flex-row lg:justify-between lg:space-x-40"
    >
      <div
        class="shadow-blue flex-col lg:h-96 h-99 w-80 lg:w-96 bg-gray-900 hover:border-blue-950 rounded-md flex border border-gray-950 mb-12"
      >
        <h3 class="text-lg font-extrabold text-montserrat text-white mt-4 ml-4">
          Basic &#127758;
        </h3>
        <div class="mt-5 border-t border-gray-950 p-3">
          <div class="p-1">
            <h4 class="font-montserrat font-extrabold text-blue-500 mb-2">
              &#9432; 0$/mo
            </h4>
            <h4 class="font-montserrat text-gray-300 mb-2">
              &#9432; 3 users in a session
            </h4>
            <h4 class="font-montserrat text-gray-300 mb-2">
              &#9432; Access to shared text Content
            </h4>

            <h4 class="font-montserrat text-gray-200 mb-2">
              &#x2715; Cannot view shared media Content
            </h4>
            <h4 class="font-montserrat text-gray-200 mb-2">
              &#x2715; Cannot export to desired file format
            </h4>

            <h4 class="font-montserrat text-gray-200 mb-2">
              &#x2715; only Images and Video support
            </h4>
            <h4 class="font-montserrat text-gray-200 mb-2">
              &#x2715; No File Label
            </h4>
          </div>
          <RouterLink to="/new">
            <button
              class="hover:bg-gray-800 bg-blue-950 p-3 rounded-md mt-4 text-white font-montserrat text-sm"
            >
              Join &nbsp; &#x1F680;
            </button>
          </RouterLink>
        </div>
      </div>

      <div
        class="shadow-blue flex-col lg:h-96 h-100 w-80 lg:w-99 bg-gray-900 hover:border-blue-950 rounded-md flex border border-gray-600 mb-12"
      >
        <h3
          class="text-lg font-extrabold text-montserrat text-blue-500 mt-4 ml-4"
        >
          Pro &#127942; [Does not exist yet😂]
        </h3>
        <div class="mt-5 border-t border-gray-600 p-3 lg:flex">
          <div class="p-1">
            <h4 class="font-montserrat font-extrabold text-blue-500 mb-2">
              &#9432; 1.99$/mo
            </h4>
            <h4 class="font-montserrat text-blue-400 mb-2">
              &#9432; 9 users in a session
            </h4>
            <h4 class="font-montserrat text-gray-300 mb-2">
              &#9432; Access to shared text Content
            </h4>

            <h4 class="font-montserrat text-gray-300 mb-2">
              &#9432; Access to shared media Content
            </h4>
            <h4 class="font-montserrat text-gray-300 mb-2">
              &#9432; Export History to desired format
            </h4>
            <h4 class="font-montserrat text-gray-300 mb-2">
              &#9432; Verified checkmark
            </h4>
            <h4 class="font-montserrat text-gray-200 mb-2">
              &#9432; All Media files supported
            </h4>
            <h4 class="font-montserrat text-gray-200 mb-2">
              &#9432; File Label
            </h4>
            <h4 class="font-montserrat text-gray-200 mb-2">
              &#9432; Drop connection stats
            </h4>
          </div>
          <RouterLink to="/new">
            <button
              class="lg:mt-60 mt-32 mb-10 hover:bg-gray-800 bg-blue-950 p-3 rounded-md text-white font-montserrat text-sm items-center lg:w-24"
            >
              Join &nbsp; &#x1F680;
            </button>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.shadow-blue {
  box-shadow: 0 8px 10px rgba(7, 97, 162, 0.765);
  /* Adjust values as needed */
}
</style>


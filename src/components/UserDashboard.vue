<template>
    <div class="bg-gray-950 pt-4 lg:pt-10 h-screen">
        <div class="flex px--10 justify-between space-x-52 mx-4 lg:mx-24">
            <h3 class="font-montserrat font-extrabold text-blue-700">dropit</h3>
            <i class="fas fa-user">
            </i>
        </div>
        <div class="mt-12 pb-10 flex justify-center space-x-10">
            <div
                class="px-5 border-b-2 text-gray-400 hover:text-gray-100 border-blue-600 hover:border-blue-400 cursor-pointer">
                <h3 class=" font-lato ">Sessions</h3>
            </div>
            <div
                class="px-5 border-b-2 text-gray-400 hover:text-gray-100 border-blue-600 hover:border-blue-400 cursor-pointer">
                <h3 class=" font-lato ">Files</h3>
            </div>
            <div
                class="px-5 border-b-2 text-gray-400 hover:text-gray-100 border-blue-600 hover:border-blue-400 cursor-pointer">
                <h3 class=" font-lato ">Texts</h3>
            </div>
        </div>
        <div class="mt-3 flex flex-col  px-10 lg:mx-24">
            <h3 class="font-montserrat font-extrabold text-gray-500 mb-4">Sessions History</h3>

            <div class="w-full rounded-md bg-gray-600 p-3 text-sm font-lato text-gray-300 flex items-center justify-between space-x-20 mb-2">
                <div class="w-36 ">
                    <h4 class="">190402319399</h4>
                </div>

                <div class="w-72">
                    <h4 class="">12 : 34 PM</h4>
                </div>

                <div class="w-20 p-2  flex justify-center">
                  <div class="bg-blue-600 px-4 py-1 rounded-sm hover:bg-blue-900 cursor-pointer ">
                    View 
                  </div>
                </div>
            </div>

            <div class="w-full rounded-md bg-gray-600 p-3 text-sm font-lato text-gray-300 flex items-center justify-between space-x-20">
                <div class="w-36 ">
                    <h4 class="">190402319399</h4>
                </div>

                <div class="w-72">
                    <h4 class="">12 : 34 PM</h4>
                </div>

                <div class="w-20 p-2  flex justify-center">
                  <div class="bg-blue-600 px-4 py-1 rounded-sm hover:bg-blue-900 cursor-pointer ">
                    View 
                  </div>
                </div>
            </div>

        </div>
    </div>
</template>
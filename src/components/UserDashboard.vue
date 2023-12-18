<template>
    <div class="bg-gray-950 pt-10 lg:pt-10 h-screen lg:px-36 ">
        <div class="flex  justify-between space-x-6 lg:space-x-52 mx-4 lg:mx-24">
            <div>
                <h3 class="font-montserrat font-extrabold text-blue-700 ml-4 mt-2 text-md">dropit</h3>
            </div>

            <div class="flex justify-center items-center space-x-3">
                <RouterLink to="session">
                <div
                    class="w-42 bg-blue-600 p-2 rounded-md flex justify-center text-gray-200 font-lato text-sm cursor-pointer">
                    Create session &#9203;
                </div>
            </RouterLink>
                <div class="bg-blue-600 p-2 rounded-md">
                    &#128589;
                </div>
            </div>
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

            <div
                class="w-full rounded-md bg-gray-700 p-3 text-sm font-lato text-gray-300 flex items-center justify-between space-x-20 mb-2">
                <div class="w-36 ">
                    <h4 class="">190402319399</h4>
                </div>

                <div class="w-72">
                    <h4 class="">12 : 34 PM</h4>
                </div>

                <div class="w-20 p-2 hidden lg:flex justify-center">
                    <div class="bg-blue-600 px-4 py-1 rounded-sm hover:bg-blue-900 cursor-pointer ">
                        View
                    </div>
                </div>
            </div>

            <div
                class="w-full rounded-md bg-gray-700 p-3 text-sm font-lato text-gray-300 flex items-center justify-between space-x-20">
                <div class="w-36 ">
                    <h4 class="">190402319399</h4>
                </div>

                <div class="w-36 lg:w-72">
                    <h4 class="">12 : 34 PM</h4>
                </div>

                <div class="w-20 p-2  hidden lg:flex justify-center ">
                    <div class="bg-blue-600 px-4 py-1 rounded-sm hover:bg-blue-900 cursor-pointer ">
                        View
                    </div>
                </div>
            </div>

        </div>
</div></template>
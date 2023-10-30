<template>
    <div class="h-screen bg-gray-800">
        <div class="">
            <h2 class="ml-7 pt-10 pb-3 text-blue-500 font-montserrat text-lg font-extrabold">dropit</h2>
        </div>
        <div class="flex flex-col">
            <h4 class="ml-12 m-1 text-sm text-white font-montserrat font-bold">Type here</h4>

            <input class="text-gray-200 mt-2 mx-6 lg:ml-20 lg:mr-20 bg-gray-600 rounded-md lg:h-16 h-14 focus:outline-none p-3 font-pop" type="text"/>

            <button class="absolute right-2 mt-32 font-extrabold font-montserrat  text-white mr-6 lg:mr-20 bg-blue-500 w-20 h-8 rounded-md text-xs hover:bg-blue-800">send</button>
        </div>
        <div class="ml-12 mb-24 w-32 h-8 rounded-sm bg-gray-600 absolute bottom-0 left-0 flex items-center justify-center">
            <i class="ml-2 mb-2 text-4xl text-green-500 mr-1">&#8226;</i>
            <h4 class="font-montserrat font-extrabold text-gray-300 text-xs">3 connected</h4>
        </div>
    </div>
</template>
<template>
    <div class="h-screen lg:h-screen bg-black flex items-center justify-between">
        <div class="w-100 ml-20">
            <img  :src="require('../assets/pana.png')">
        </div>

        <div class="mr-64 mb-40 flex flex-col items-center justify-center ">
            <h1 class="text-montserrat font-extrabold  text-blue-500 text-6xl mb-24">Clipsync</h1>
            <h2 class="text-white font-montserrat font-bold mt-4">Enter your session code</h2>
            
               
                <input class="mt-4 w-72 p-2 rounded-md focus:outline-none font-pop focus:ring-4 focus:ring-blue-500" type="text"/>

                <button class="mt-4 w-72 h-10 bg-blue-500 rounded-md font-montserrat font-extrabold text-center text-white text-md hover:bg-blue-800">Create/Join Session</button>
            
           
        </div>
       
    </div>
</template>
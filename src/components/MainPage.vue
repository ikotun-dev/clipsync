<template>
    <div class="pb-40 pt-10 px-10 bg-gray-900">
        <div class="flex flex-col items-center justify-between">
            <div class="flex mt-6 mb-12 lg:justify-between items-center ">
                <h3 class="text-blue-600 font-montserrat font-extrabold text-xl">dropit</h3>
                <div class="lg:w-[120vh] md:w-[50vh] w-[15vh] "></div>
                <RouterLink to="/new">
                <h3
                 
                    class="text-gray-200 font-montserrat border border-blue-800 rounded-lg text-xs h-8 pt-2 hover:bg-blue-900 cursor-pointer bg-blue-800 w-36 text-center">
                    Create Session</h3>
                </RouterLink>
            </div>

            <div>
                <h3 class="lg:text-4xl md:text-2xl text-md font-semibold text-blue-500 font-montserrat inline-block">
                    Seamless Sharing, Instant
                    Syncing
                </h3>
                <h3 class="lg:text-3xl md:text-xl text-sm mt-2 text-white font-montserrat ">Your Gateway to Effortless File
                    and Text Sharing
                    Across
                    Devices
                </h3>
            </div>
        </div>
        <div class="mt-24 flex justify-center">
            <img class="lg:w-[90vh] w-[40vh]" :src="require('../assets/mobilemock.png')">
        </div>
        <div class="mt-20 mb-12 flex justify-center ">
            <div class="h-24 rounded-lg shadow-inner">
                <div class="blur-none flex ">
                    <div class=" mr-4 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 24 24" strokeWidth={1.5}
                            stroke="black" class="w-12 h-12">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>

                    <div>
                        <h4 class="text-md mb-12 lg:text-3xl mt-3 lg:mt-1 font-montserrat font-semibold text-gray-400 ">
                            Steps to
                            Create a
                            session</h4>
                        <div class="mr-10">
                            <div class="flex mt-3 ">

                                <li
                                    class="text-xs lg:text-lg lg:mt-0 mt-2  font-montserrat font-semibold text-gray-200 hover:text-blue-600 ">
                                    Click
                                    Create
                                    Session Button</li>
                            </div>
                            <div class="flex mt-3">
                              
                                <li
                                    class="text-xs lg:text-lg mt-2 lg:mt-0  font-montserrat font-semibold text-gray-300 hover:text-blue-600 ">
                                    Create ( 8 )
                                    Digit
                                    Session Code</li>

                            </div>
                            <div class="flex mt-3 hover:text-blue-600">
                        
                                <li
                                    class="text-xs lg:text-lg mt-1 lg:mt-0  font-montserrat font-semibold text-gray-300 hover:text-blue-600">
                                    Begin Your Session
                            </li>
                            </div>

                            <div class="flex mt-3">
                           
                                <li class="text-xs lg:text-lg mt-1 lg:mt-0 font-montserrat font-semibold text-gray-300 hover:text-blue-600">Share Files
                                    or Text
                                </li>


                            </div>

                    </div>
                </div>

            </div>
        </div>

    </div>

</div>
<FooterButtom></FooterButtom></template>
<script>
import FooterButtom from './FooterButtom.vue';
export default{
    components : {
FooterButtom
    }
}
</script>
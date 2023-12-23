<template>
    <div class="pb-40 pt-4 lg:pt-10 px-10 bg-gray-950">
        <div class="flex flex-col items-center justify-between">
            <div class="flex mt-6 mb-12 lg:justify-between items-center ">
                <h3 class="text-blue-600 font-montserrat font-extrabold md:text-xl lg:text-xl text-lg ">dropit&#x21BA;</h3>
                <div class="lg:w-[80vh] md:w-[50vh] w-[10vh] "></div>
                <RouterLink to="/login">
                <h3
                 
                    class="text-gray-950 hover:text-white hover:text-extrabold font-montserrat border border-blue-800 rounded-lg text-xs  lg:px-0 h-8 pt-2 hover:bg-blue-900 cursor-pointer bg-gray-300 w-20 lg:w-20 mr-2 text-center">
                    Go in &#x1F680;</h3>
                </RouterLink>
                <div class="w-4"></div>
                <RouterLink to="/new">
                <h3
                 
                    class="text-gray-200 font-montserrat border border-blue-800 rounded-lg text-xs  lg:px-0 h-8 pt-2 hover:bg-blue-900 cursor-pointer bg-blue-800 w-20 lg:w-32 text-center">
                    Sign up 🔗</h3>
                </RouterLink>
            </div>

            <div>
                <h3 class="lg:text-4xl md:text-2xl text-md font-semibold text-blue-500 font-montserrat inline-block">
                    Seamless Sharing, Instant
                    Syncing &#x21BA;
                </h3>
                <h3 class="lg:text-3xl md:text-xl text-sm mt-2 text-white font-montserrat ">Your Gateway to Effortless File
                    and Text Sharing
                    Across
                    Devices
                </h3>
                <h3 class="lg:text-3xl md:text-xl text-sm mt-2 text-white font-montserrat ">Bridging Cross-platform Gaps
                </h3>
            </div>
        </div>
        <div class="mt-12 mb-10  justify-center hidden md:flex lg:flex ">
            <img class="lg:w-[90vh] w-[100vh]" :src="require('../assets/mockupFolder.png')">
        </div>
        <div class="mt-12 flex justify-center lg:hidden md:hidden">
            <img class="lg:w-[100vh] w-[90vh]" :src="require('../assets/mock2.png')">
        </div>
        <plansSection>

        </plansSection>
        
</div>
<FooterButtom></FooterButtom></template>
<script>
import plansSection from './plansSection.vue';
import FooterButtom from './FooterButtom.vue';
export default{
    components : {
FooterButtom,
plansSection
    }
}
</script>
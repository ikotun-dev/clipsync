<template>
  <div class="mt-3 flex flex-col  lg:px-10 px-5 lg:mx-24">
    <h3 class="font-montserrat font-extrabold text-gray-500 mb-4">Texts Shared</h3>

    <div
      class="w-full rounded-md bg-gray-700 p-3 text-sm font-montserrat text-gray-300 flex items-center justify-between space-x-20 mb-2">
      <div class="w-36 ">
        <h4 class="text-lg font-semibold">Coming Soon
        </h4>
      </div>



      <div class="w-20 p-2 hidden lg:flex justify-center">
        <div class="bg-blue-600 px-4 py-1 rounded-sm hover:bg-blue-900 cursor-pointer ">
          View
        </div>
      </div>
    </div>
    <!-- 
            <div
                class="w-full rounded-md bg-gray-700 p-3 text-sm font-montserrat text-gray-300 flex items-center justify-between space-x-20">
                <div class="w-36 ">
                    <h4 class="">file1.jpg</h4>
                </div>

                <div class="w-36 lg:w-72">
                    <h4 class="">12 : 34 PM</h4>
                </div>

                <div class="w-20 p-2  hidden lg:flex justify-center ">
                    <div class="bg-blue-600 px-4 py-1 rounded-sm hover:bg-blue-900 cursor-pointer ">
                        View
                    </div>
                </div>
            </div> -->

  </div>
</template>
<script>
export default {
  data() {
    return {
      texts: []

    }
  },
  methods: {
    fetchUserTexts() {

    }
  }
}
</script>

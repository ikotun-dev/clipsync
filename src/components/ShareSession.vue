<template>
    <div
      class="fixed top-0 left-0 w-full h-full z-50 bg-gray-900 opacity-75"
      @click="handleClose"
      v-if="show === true"
    >
      <div class="flex flex-col justify-center items-center h-full"  >
        <div class="bg-white rounded-md p-4">
          <h2 class="text-gray-900 font-montserrat font-extrabold text-lg mb-4">
            Share
          </h2> 
          <div class="flex flex-col items-center">
            <div class="qr-code-container">
              <qr-code :value="shareLink" size="150" />
            </div>
            <p class="text-gray-600 font-montserrat text-sm mt-4">
              Share this link with others to join the group:
            </p>
            <a href="#" class="text-blue-500 font-montserrat text-sm mt-2">
              {{ code }}
            </a>
          </div>
          <button
            class="mt-4 bg-blue-500 text-white font-montserrat font-extrabold text-xs py-2 px-4 rounded-md hover:bg-blue-700"
            @click="handleClose"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        show: true,
        shareLink: "",
      };
    },
    props:{
        code : String,
    },
    methods: {

      openShareModal(link) {
        this.shareLink = link;
        this.show = true;
      },
      handleClose() {
        this.$emit('close')
      },
    },
  };
  </script>
  
  <style scoped>
  .qr-code-container {
    width: 150px;
    height: 150px;
    margin: 0 auto;
  }
  </style>
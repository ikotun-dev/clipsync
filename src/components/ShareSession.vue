<template>
  <div
    class="fixed top-0 left-0 w-full h-full z-50 lg:bg-gray-900 md:bg-gray-900 bg-gray-900 inset-0 bg-opacity-60"
    @click="handleClose"
    v-if="show === true"
  >
    <div class="flex flex-col justify-center items-center h-full">
      <div class="bg-white rounded-md p-4">
        <h2 class="text-gray-900 font-montserrat font-extrabold text-lg mb-4">
          Share
        </h2>
        <div class="flex flex-col items-center">
          <div class="qr-code-container">
            <qrcode-vue :value="qrCodeValue" :size="150"></qrcode-vue>
          </div>
          <p class="text-gray-600 font-montserrat text-sm mt-4">
            Share this link with others to join dropit<br />
          </p>
          <a href="#" class="text-blue-500 font-montserrat text-sm mt-2">
            userdropit.xyz
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
import QrcodeVue from "qrcode.vue";
export default {
  components: {
    QrcodeVue,
  },
  data() {
    return {
      show: true,
      shareLink: "",
      qrCodeValue: "",
    };
  },
  props: {
    code: String,

    sessionValue: String,
  },
  methods: {
    openShareModal() {
      console.log("open share modal");
      alert(this.shareLink);
      this.qrCodeValue = `https://dropit-express.fly.dev/#/n`;
      this.show = true;
    },
    handleClose() {
      this.$emit("close");
    },
  },
  mounted() {
    console.log("code passed : ", this.code);
    this.qrCodeValue = `https://usedropit.xyz/#/session/${this.code}/${this.sessionValue}`;
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

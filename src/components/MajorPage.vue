<template>
  <div class="bg-gray-950 min-h-screen">
    <ShareSession
      :code="`${sessionCode}`"
      :sessionValue="`${sessionVal}`"
      v-if="shareSessionComponent === true"
      @close="shareSessionComponent = false"
    >
    </ShareSession>
    <div
      style="height: auto; min-height: h-screen"
      class="pb-20 lg:px-36 bg-gray-950"
    >
      <div class="lg:pt-12 pt-5">
        <a
          class="lg:ml-20 ml-4 pt-10 pb-3 text-blue-600 font-montserrat text-sm font-thin mr-4 cursor-pointer"
          @click="$router.go(-1)"
        >
          &LessLess; Back</a
        >
      </div>

      <div class="flex justify-between">
        <h2
          class="lg:ml-20 ml-6 pt-10 pb-3 text-blue-500 font-montserrat text-md mt-2 font-extrabold"
        >
          dropit
        </h2>
        <div class="flex pt-3">
          <h2
            class="mr-7 mt-10 h-8 lg:mr-20 bg-blue-800 rounded-sm text-gray-200 font-montserrat text-xs p-2 font-extrabold"
          >
            {{ sessionVal }}
          </h2>
        </div>
      </div>
      <div class="flex flex-col">
        <div
          class="flex lg:ml-20 ml-6 mt-4 mb-3 h-8 lg:h-8 lg:w-12 w-12 rounded-sm px-4 pt-2 bg-blue-900 hover:bg-gray-900 cursor-pointer"
          @click="openShareModal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="white"
            class="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
            />
          </svg>
          <!-- <h2
                    class="hidden lg:block ml-1  h-8 lg:mr-2rounded-lg text-gray-900 font-montserrat mt-1 text-xs lg:text-xs  font-extrabold ">
                    share</h2>-->
        </div>

        <h4
          class="lg:ml-20 ml-6 text-sm text-gray-200 font-montserrat font-bold"
        >
          Input file or text
        </h4>
        <i></i>
        <div
          class="flex items-center mt-2 mx-6 lg:mx-20 bg-gray-600 rounded-md focus:bg-gray-700 h-auto cursor-pointer"
        >
          <div class="flex items-center cursor-pointer text-white">
            <i
              class="ml-6 fa-solid fa-upload hover:text-gray-950 text-gray-100 text-xl cursor-pointer"
              @click="openFileInput()"
            ></i>
            <input
              type="file"
              ref="fileInput"
              class="hidden"
              @change="handleFileChange()"
            />
          </div>

          <input
            v-model="boxContent"
            @input="validateInput"
            class="expandable-input text-gray-200 mt-1 mx-1 lg:mx-1 bg-gray-600 rounded-md focus: w-full lg:w-full lg:max-h-100 lg:h-14 text-xs h-14 focus:outline-none p-3 font-pop"
            type="text"
          />

          <i
            v-show="no_value === true"
            class="text-red-500 fa-solid fa-circle-exclamation mr-4 text-3xl"
          ></i>
        </div>
        <div
          v-show="selectedFileName"
          class="flex items-center mx-8 lg:mx-20 mt-2"
        >
          <i class="fas fa-file text-2xl text-white"></i>
          <h4
            class="lg:ml-2 ml-2 text-sm text-gray-200 font-montserrat mt-2 font-bold mb-2"
          >
            {{ selectedFileName }}
          </h4>
        </div>

        <button
          @click="sendMessage()"
          class="absolute right-2 lg:mt-52 mt-48 font-extrabold font-montserrat text-white mr-4 lg:mr-54 bg-blue-900 w-20 h-8 rounded-md text-xs hover:bg-gray-800"
        >
          send
        </button>
      </div>
      <div class="flex flex-col mt-20">
        <div class="flex items-center mt-10 cursor-pointer">
          <h4
            class="lg:ml-20 ml-6 text-sm text-gray-400 font-montserrat font-bold"
            @click="toggleBlockState()"
            :class="{ 'border-b-2 border-b-blue-700 p-1': !toggleBlock }"
          >
            Text Drops
          </h4>
          <!-- <h4 class="ml-3 text-xl">&#128214;</h4> -->
          <h4
            class="lg:ml-20 ml-6 text-sm text-gray-400 font-montserrat font-bold"
            @click="toggleBlockState()"
            :class="{ 'border-b-2 border-b-blue-700 p-1': toggleBlock }"
          >
            File Drops
          </h4>
        </div>

        <div
          v-show="toggleBlock === false"
          v-for="(message, index) in nonUrlMessages"
          :key="index"
          style="height: 100%; overflow-y: auto"
          class="flex text-gray-200 mt-2 mx-6 lg:ml-20 lg:mr-20 bg-blue-950 opacity-3 rounded-md text-xs focus:outline-none p-4 pt-4 font-pop"
        >
          <div class="flex item-center">
            <div class="w-48 lg:w-[60vh]">
              {{ message }}
            </div>
            <div
              v-if="copiedStates[index]"
              class="cursor-pointer w-10 ml-6 mb-2 lg:mr-2 lg:right-60 mr-8 absolute right-0"
            >
              <i class="fa-solid fa-clipboard-check text-lg"></i>
            </div>

            <div
              v-else
              @click="copyMessage(index)"
              class="cursor-pointer w-10 ml-6 mb-2 lg:mr-2 lg:right-60 mr-8 absolute right-0"
            >
              <i class="fa-solid fa-copy text-lg text-white"></i>
            </div>
          </div>
        </div>

        <div
          v-show="toggleBlock === true"
          v-for="(message, index) in urlMessages"
          :key="index"
          style="height: 100%; overflow-y: auto"
          class="flex text-gray-200 mt-2 mx-6 lg:ml-20 lg:mr-20 bg-blue-950 opacity-3 rounded-md text-xs focus:outline-none p-4 pt-4 font-pop"
        >
          <div class="flex items-center justify-between">
            <!-- Navigation Link -->
            <a :href="message" class="flex">
              <i class="fas fa-file mr-2 text-xl"></i>
              <h2 class="mr-20 mt-1">File {{ index + 1 }}</h2>
            </a>

            <!-- Download Icon -->
            <a
              :href="message"
              download="file"
              target="_blank"
              class="cursor-pointer w-10 ml-6 lg:mr-2 lg:right-60 mr-8 absolute right-0"
            >
              <i class="fas fa-download ml-2 text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div
      class="ml-4 mr-4 mb-10 lg:w-110 w-80 h-8 rounded-sm bg-gray-7 00 fixed bottom-0 flex items-center justify-between"
    >
      <div class="flex">
        <i class="mt-4 ml-2 mb-2 text-4xl text-green-500 mr-1">&#8226;</i>
        <h4 class="mt-8 font-montserrat font-extrabold text-white text-xs">
          connected
        </h4>
      </div>

      <div class="lg:flex hidden mb-2">
        <h4 class="mt-8 font-montserrat font-extrabold text-red-600 text-xs">
          close
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
import Vuecookies from "vue-cookie";
import ShareSession from "./ShareSession.vue";
export default {
  components: {
    ShareSession,
  },

  data() {
    return {
      toggleBlock: false,
      sessionCode: null,
      copied: false,
      socket: "",
      boxContent: "",
      currentSession: "",
      sCode: Vuecookies.get("sessionCode"),
      no_value: false,
      receivedMsg: [],
      shareSessionComponent: false,
      copiedStates: [], // Array to store copied state for each message
      selectedFileName: "",
      fileSent: false,
      textSent: false,
    };
  },
  props: ["sessionId", "sessionVal"],

  methods: {
    toggleBlockState() {
      this.toggleBlock = !this.toggleBlock;
    },
    isURL(message) {
      try {
        const parsedMessage = JSON.parse(message);

        // Check if the parsed message has the structure of a file upload response
        if (
          parsedMessage.type === "file" &&
          parsedMessage.fileName &&
          parsedMessage.fileUrl
        ) {
          return true;
        }
      } catch (error) {
        // If parsing as JSON fails, it's not a file upload response
      }

      // Regular expression to check if the message is a URL
      const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
      return urlRegex.test(message);
    },
    //function for handling file changes
    handleFileChange() {
      const fileInput = this.$refs.fileInput;
      const selectedFile = fileInput.files[0];

      // Set the selected file name
      this.selectedFileName = selectedFile.name;
      //  alert(`Selected file: ${selectedFile.name}`);
      // ... (other logic, if needed) ...
    },
    validateInput() {
      const input = this.boxContent;
      if (
        input.trim().length == 0 &&
        this.selectedFileName.trim().length == 0
      ) {
        this.no_value = true;
        console.log("pwd validation failed");
        setTimeout(() => {
          this.no_value = false;
        }, 4000);
      } else {
        this.no_value = false;
      }
    },

    sendMessage() {
      this.validateInput();
      if (!this.no_value) {
        // Proceed to send the content to the server via WebSocket
        if (this.selectedFileName && !this.fileSent) {
          console.log("File selected: " + this.selectedFileName);

          // Handle sending the file via the socket
          const fileInput = this.$refs.fileInput;
          const selectedFile = fileInput.files[0];
          const fileReader = new FileReader();

          fileReader.onload = () => {
            // Send the file content via the socket
            const fileContent = fileReader.result;
            console.log("Received file content:", typeof fileContent);

            // Check if the fileContent is an ArrayBuffer before sending
            if (fileContent instanceof ArrayBuffer) {
              this.socket.send(fileContent);
              console.log("file is also a Array buffer array");
              this.fileSent = true;

              //reset the time flag to false
              setTimeout(() => {
                this.fileSent = false;
              }, 1000);
            } else {
              console.error("Error: File content is not an ArrayBuffer.");
            }
          };

          // Read the file as an ArrayBuffer
          fileReader.readAsArrayBuffer(selectedFile);
          // Clear the file input
          fileInput.value = null;
          this.selectedFileName = "";
        }
        if (this.boxContent && !this.textSent) {
          // Handle regular text message

          const content = this.boxContent;

          console.log("Message to send: " + content);
          this.socket.send(content);
          this.textSent = true;
          this.boxContent = "";

          //reset textSent flag
          this.textSent = false;
        }
      }
    },
    openShareModal() {
      this.shareSessionComponent = true;
    },

    copyMessage(index) {
      const message = this.nonUrlMessages[index];
      navigator.clipboard.writeText(message);

      // Set copied state just for this index
      this.copiedStates[index] = true;

      setTimeout(() => {
        // Reset the copied state after a delay
        // Clear after delay
        this.copiedStates[index] = false;
      }, 4000);
    },
    openFileInput() {
      this.$refs.fileInput.click();
    },
    reconnectWebSocket() {
      // You can add logic to limit reconnection attempts or add delays between attempts
      console.log("Attempting to reconnect...");
      // Retry connection after a delay
      setTimeout(() => {
        this.connectWebSocket();
      }, 3000); // Adjust the delay as needed
    },
    connectWebSocket() {
      const token = Vuecookies.get("token");
      this.socket = new WebSocket(
        `wss://dropit-express.fly.dev/${this.sessionCode}?token=${token}`
      );

      this.socket.onclose = (event) => {
        if (event.code === 401) {
          console.log("Authentication error. Redirecting to login.");
          // Perform your redirection here, e.g., using Vue Router
          //  this.$router.push('/login');
        } else {
          console.log("WebSocket closed with code:", event.code);
          // Attempt to reconnect in the else block
          this.reconnectWebSocket();
        }
      };
    },

    checkAuth() {
      const token = Vuecookies.get("token");
      if (!token) {
        this.$router.push("/login");
      }
    },
  },

  //retrieve user token and pass int into the socket
  // do some stuffs

  mounted() {
    //running the function to check if an authroization cookie exists
    this.checkAuth();
    //  console.log(this.urlMessages)
    // console.log(this.nonUrlMessages);
    this.sessionCode = this.sessionId || Vuecookies.get("sessionId");
    console.log(this.sessionCode);
    this.socket = new WebSocket(
      `wss://dropit-express.fly.dev/${this.sessionCode}?token=${Vuecookies.get(
        "token"
      )}`
    );

    this.socket.onmessage = (msg) => {
      //   const message = ms;.
      console.log(typeof msg);
      try {
        const isBinary = msg.data instanceof ArrayBuffer;

        if (isBinary) {
          // Handle binary data (e.g., display image, save to Cloudinary, etc.)
          const blob = new Blob([msg.data]);
          // Process the blob as needed
          console.log("Received binary data:", blob);
        } else {
          // Handle regular text message
          let validMessage;
          console.log(msg);
          try {
            validMessage = JSON.parse(msg);

            if (this.sessionCode && validMessage) {
              console.log("Received JSON message:", validMessage);
              this.receivedMsg = [...this.receivedMsg, validMessage.text];
            } else {
              console.warn("Invalid message structure:", validMessage);
              // Handle messages without "text" property or invalid structure
            }
          } catch (jsonParseError) {
            // If JSON parsing fails, treat msg.data as plain text
            console.log("Not JSON. Treating as plain text:", msg.data);

            this.receivedMsg = [...this.receivedMsg, msg.data]; //   validMessage = null;
          }
        }
      } catch (e) {
        console.log("Error handling message:", e.message);
      }
      // Check if the session code of the received message matches the current session code
    };
    // Event handler for socket errors
    this.socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    this.socket.onclose = (event) => {
      // Check if the close code indicates an authentication error
      if (event.code === 401) {
        // Token expired or unauthorized, redirect to login or handle as needed
        console.log("Authentication error. Redirecting to login.");
        // Perform your redirection here, e.g., using Vue Router
        // this.$router.push('/login');
      } else {
        this.$router.go(-1);
        // Handle other close codes if needed
        console.log("WebSocket closed with code:", event.code);
        this.connectWebSocket();
      }
    };

    this.copiedStates = new Array(this.receivedMsg.length).fill(false);
  },
  computed: {
    reversedMessages() {
      // Reverse the array before displaying it
      return this.receivedMsg.slice().reverse();
    },
    // Filter messages that are URLs
    urlMessages() {
      return this.reversedMessages.filter((message) => this.isURL(message));
    },
    // Filter messages that are not URLs
    nonUrlMessages() {
      return this.reversedMessages.filter((message) => !this.isURL(message));
    },
  },
};
</script>

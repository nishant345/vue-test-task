<!-- template for Messages component -->
<template>
  <div>
    <div v-show="messages.length > 0">
      <h2>{{ MessageHeading }}</h2>
      <button class="clear" v-on:click="clear">clear</button>
      <div v-for="(message, index) in messages" :key="index">{{ message }}</div>
    </div>
  </div>
</template>

<script>
import { bus } from "../main";
export default {
  props: ["messages"],
  data() {
    return {
      MessageHeading: "Messages"
    };
  },
  methods: {
    clear: function() {
      this.messages = [];
    }
  },
  created() {
    bus.$on("updateMessageBoxAdd", msg => {
      this.messages.push(msg);
    });
    bus.$on("updateMessageBoxDelete", msg => {
      this.messages.push(msg);
    });
    bus.$on("updateMessageBoxDashboard", msg => {
      this.messages.push(msg);
    });
    bus.$on("updateMessageBoxDetail", msg => {
      this.messages.push(msg);
    });
  }
};
</script>

<style scoped>
/* MessagesComponent's private CSS styles */
h2 {
  color: red;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: lighter;
}
body {
  margin: 2em;
}
body,
input[text],
button {
  color: crimson;
  font-family: Cambria, Georgia;
}

button.clear {
  font-family: Arial;
  background-color: #eee;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  cursor: hand;
}
button:hover {
  background-color: #cfd8dc;
}
button:disabled {
  background-color: #eee;
  color: #aaa;
  cursor: auto;
}
button.clear {
  color: #888;
  margin-bottom: 12px;
}
</style>

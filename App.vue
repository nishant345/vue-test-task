<!-- template for App component -->
<template>
  <div>
    <h1>{{ title }}</h1>
    <nav>
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/heros">Heros</router-link>
    </nav>
    <router-view :heros="heros"></router-view>
    <Messages :messages="messages"></Messages>
  </div>
</template>
<script>
import Heros from "./components/Heros";
import Dashboard from "./components/Dashboard";
import Herosearch from "./components/Hero-search";
import Messages from "./components/Messages";
import Herodetail from "./components/Hero-detail";
export default {
  components: {
    Heros,
    Dashboard,
    Herosearch,
    Messages,
    Herodetail
  },
  data() {
    return {
      title: "Tour Of Heroes",
      heros: [],
      messages: []
    };
  },
  methods: {
    initMessageBox: function(msg) {
      this.$emit("initMessageBox", msg);
    }
  },
  created() {
    this.$http.get("https://vue-test-task-8b759.firebaseio.com/heros.json").then(function(data) {
      return data.json();
    }).then(function(data){
      for( var key in data){
        data[key].userId = key;
        this.heros.push(data[key]);
      }
      console.log(this.heros);
    });
  }
 } 
</script>

<style scoped>
/* AppComponent's private CSS styles */
h1 {
  font-size: 1.2em;
  color: #999;
  margin-bottom: 0;
}
h2 {
  font-size: 2em;
  margin-top: 0;
  padding-top: 0;
}
nav a {
  padding: 5px 10px;
  text-decoration: none;
  margin-top: 10px;
  display: inline-block;
  background-color: #eee;
  border-radius: 4px;
}
nav a:visited,
a:link {
  color: #607d8b;
}
nav a:hover {
  color: #039be5;
  background-color: #cfd8dc;
}
nav a.active {
  color: #039be5;
}
</style>

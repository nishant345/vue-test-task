  <!-- template for hero detail component -->
<template>
  <div>
    <h2> {{hero.name}} Details</h2>
    <div><span>id: </span>{{ hero.id }}</div>
    <div>
      <label>name: <input type="text" placeholder="name" v-model="hero.name"/> </label>
    </div>
    <button v-on:click="goBack">go back</button> <button v-on:click="save">save</button>
  </div>
</template>

<script>
import { bus } from "../main";
export default {
  data() {
    return {
      MessageHeading: "Messages",
      id: this.$route.params.id,
      hero: {}
    };
  },
  methods: {
    goBack: function(){
      this.$router.go(-1);
    },
    save: function(){
      this.$http
        .put("https://vue-test-task-8b759.firebaseio.com/heros/"+this.$route.params.id+".json", {
          name: this.hero.name,
          id: this.hero.id
        })
        .then(function(data) {
          this.$router.go(-1);
        });
    }
  },
  created() {
    this.$http.get("https://vue-test-task-8b759.firebaseio.com/heros/"+this.$route.params.id+".json").then(function(data) {
      return data.json();
    }).then(function(data){
      this.hero = data;
      bus.$emit("updateMessageBoxDetail", "HeroService: fetched hero="+ this.hero.id);
    });
  }
};
</script>

<style scoped>
/* HeroDetailComponent's private CSS styles */
label {
  display: inline-block;
  width: 3em;
  margin: 0.5em 0;
  color: #607d8b;
  font-weight: bold;
}
input {
  height: 2em;
  font-size: 1em;
  padding-left: 0.4em;
}
button {
  margin-top: 20px;
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
  color: #ccc;
  cursor: auto;
}
</style>

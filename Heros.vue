<!-- template for hero component -->
<template> 
  <div>
    <h2>{{ HeadingHeroComponent }}</h2>
    <label> Hero name: <input type="text" v-model="heros.name" /> </label>
    <button v-on:click="addHero">add</button>
    <ul class="heroes">
      <li v-for="(hero, index) in heros" :key="index">
        <a>
          <router-link :to="'/detail/'+ hero.userId">
            <span class="badge">{{ hero.id }}</span> {{ hero.name }}
          </router-link>
        </a>
        <button
          class="delete"
          title="delete hero"
          v-on:click="deleteHero(hero);"
        >
          x
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { bus } from "../main";
export default {
  props: ["heros"],
  data() {
    return {
      HeadingHeroComponent: "My Heros",
      counter: 0
    };
  },
  methods: {
    addHero: function() {
      this.counter++;
      /*this.heros.push({
        name: this.heros.name,
        id: 20 + this.counter
      });*/
      this.$http
        .post("https://vue-test-task-8b759.firebaseio.com/heros.json", {
          name: this.heros.name,
          id: 20 + this.counter
        })
        .then(function(data) {
          console.log(data);
        });
      this.heros.name = "";
      bus.$emit("updateMessageBoxAdd", "HeroService: added hero w/ id="+ parseInt(20+this.counter));
    },
    deleteHero: function(hero) {
      var removedHero = this.heros.indexOf(hero);
      this.heros.splice(removedHero, 1);
      bus.$emit("updateMessageBoxDelete", "HeroService: deleted hero id="+ hero.id);
    }
  },
  created() {
    bus.$emit("updateMessageBoxDashboard", "HeroService: fetched Heroes");
  }
};
</script>

<style scoped>
/* HeroesComponent's private CSS styles */
.heroes {
  margin: 0 0 2em 0;
  list-style-type: none;
  padding: 0;
  width: 15em;
}
.heroes li {
  position: relative;
  cursor: pointer;
  background-color: #eee;
  margin: 0.5em;
  padding: 0.3em 0;
  height: 1.6em;
  border-radius: 4px;
}

.heroes li:hover {
  color: #607d8b;
  background-color: #ddd;
  left: 0.1em;
}

.heroes a {
  color: #888;
  text-decoration: none;
  position: relative;
  display: block;
  width: 250px;
}

.heroes a:hover {
  color: #607d8b;
}

.heroes .badge {
  display: inline-block;
  font-size: small;
  color: white;
  padding: 0.8em 0.7em 0 0.7em;
  background-color: #607d8b;
  line-height: 1em;
  position: relative;
  left: -1px;
  top: -4px;
  height: 1.8em;
  min-width: 16px;
  text-align: right;
  margin-right: 0.8em;
  border-radius: 4px 0 0 4px;
}

button {
  background-color: #eee;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  cursor: hand;
  font-family: Arial;
}

button:hover {
  background-color: #cfd8dc;
}

button.delete {
  position: relative;
  left: 194px;
  top: -32px;
  background-color: gray !important;
  color: white;
}
</style>

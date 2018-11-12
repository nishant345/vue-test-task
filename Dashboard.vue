<!-- template for Dashboard component -->
<template>
  <div>
    <h3>{{ DashboardComponentHeading }}</h3>
    <div class="grid grid-pad">
      <a
        v-for="(hero, index) in heros.slice(1, 5)"
        :key="index"
        class="col-1-4"
      >
        <router-link :to="'/detail/'+ hero.userId">
          <div class="module hero">
            <h4>{{ hero.name }}</h4>
          </div>
        </router-link>
      </a>
    </div>
    <HeroSearch :heros="heros"></HeroSearch>
  </div>
</template>

<script>
import HeroSearch from "./Hero-search";
import { bus } from "../main";
export default {
  components: {
    HeroSearch
  },
  props: ["heros"],
  data() {
    return {
      DashboardComponentHeading: "Top Heroes"
    };
  },
  created() {
    bus.$emit("updateMessageBoxDashboard", "HeroService: fetched Heroes");
  }
};
</script>

<style scoped>
/* DashboardComponent's private CSS styles */
[class*="col-"] {
  float: left;
  padding-right: 20px;
  padding-bottom: 20px;
}
[class*="col-"]:last-of-type {
  padding-right: 0;
}
a {
  text-decoration: none;
}
*,
*:after,
*:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
h3 {
  text-align: center;
  margin-bottom: 0;
}
h4 {
  position: relative;
}
.grid {
  margin: 0;
}
.col-1-4 {
  width: 25%;
}
.module {
  padding: 20px;
  text-align: center;
  color: #eee;
  max-height: 120px;
  min-width: 120px;
  background-color: #607d8b;
  border-radius: 2px;
}
.module:hover {
  background-color: #eee;
  cursor: pointer;
  color: #607d8b;
}
.grid-pad {
  padding: 10px 0;
}
.grid-pad > [class*="col-"]:last-of-type {
  padding-right: 20px;
}
@media (max-width: 600px) {
  .module {
    font-size: 10px;
    max-height: 75px;
  }
}
@media (max-width: 1024px) {
  .grid {
    margin: 0;
  }
  .module {
    min-width: 60px;
  }
}
</style>

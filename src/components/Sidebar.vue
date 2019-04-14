<template>
  <div class="sidebar">
    <router-link class="sidebar-title" to="/">
      <h2>
        ⚗️ Vuelab
        <small>v{{ version }}</small>
      </h2>
    </router-link>
    <input type="search" class="sidebar-search" v-model="query" placeholder="Search for Components">

    <nav>
      <ul>
        <nav-group v-for="group in filteredExperiments" :key="group.category" :group="group"></nav-group>
      </ul>
    </nav>
  </div>
</template>

<script>
import NavGroup from "@/components/NavGroup";

export default {
  components: {
    NavGroup
  },
  props: ["version", "experiments"],
  data() {
    return {
      query: ""
    };
  },
  computed: {
    filteredExperiments() {
      return this.experiments.map(e => {
        const filteredEntries = e.entries.filter(({ name }) =>
          name.toLowerCase().includes(this.query)
        );

        return Object.assign({}, e, { entries: filteredEntries });
      });
    }
  }
};
</script>

<style lang="scss">
$green: #42b983;
$primary: #42b983;
$black: #2c3e50;
$gray: #7f8c8d;

.sidebar {
  padding: 1rem;
  font-family: "Helvetica Neue", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);

  h2,
  h3 {
    font-weight: normal;
    color: $black;
  }

  h2 {
    margin-bottom: 1em;
  }

  h3 {
    margin: 1em 0;
  }

  small {
    font-weight: 300;
    color: $gray;
  }

  a {
    position: relative;
    text-decoration: none;
    color: $gray;
    line-height: 1.5em;
    transition: color 0.3s;

    &:hover {
      color: $black;
    }

    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: -0.3em;
      left: 0;
      background-color: $green;
      visibility: hidden;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      -webkit-transition: all 0.3s ease-in-out 0s;
      transition: all 0.3s ease-in-out 0s;
    }

    &:hover:before {
      visibility: visible;
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }
  }

  ul {
    list-style-type: none;

    li {
      margin-bottom: 0.5rem;
    }
  }

  .sidebar-title {
    font-weight: bold;
  }

  .sidebar-search {
    display: block;
    color: $black;
    font-size: 1em;
    border: 1px solid #ccc;
    padding: 0.5rem 0.8rem;
    padding-left: 2.3em;
    border-radius: 3px;
    margin-top: 0.8rem;
    transition: all 0.5s;
    width: 100%;
    background: #fff url("/images/search.png") 8px 5px no-repeat;
    background-size: 25px;

    &:focus {
      // box-shadow: 0 3px 5px rgba(0, 0, 0, 0.5);
      border-color: $primary;
    }

    &::placeholder {
      color: $gray;
    }
  }
}
</style>
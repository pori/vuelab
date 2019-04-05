<template>
  <div class="app-container">
    <sidebar :version="version" :experiments="experiments"></sidebar>
    <div class="viewer">
      <router-view/>
    </div>
  </div>
</template>

<script>
import { makeHierarchy } from "@/lib/names";
import Sidebar from "@/components/Sidebar";
import Reveal from "@/components/Reveal";

const requireComponent = require.context(
  LAB_PATH,
  true,
  /[\w-]+\.experiment.vue$/
);

const experiments = makeHierarchy(requireComponent.keys());

export default {
  components: { Sidebar, Reveal },
  data() {
    return {
      version: LAB_VERSION,
      experiments
    };
  }
};
</script>


<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app-container {
  display: grid;
  grid-template-columns: 25% 75%;
}

.viewer {
  padding: 1rem;
  // display: flex;
  width: 100%;
  min-height: 100vh;
  // justify-content: center;
  // align-content: center;
  // align-items: center;
}
</style>

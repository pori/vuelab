<template>
  <li>
    <a href="javascript:;" @click="display = (display) ? false : true">
      <h3>
        <span class="arrow" :class="{ 'arrow-rotate': !display }"></span>
        <span style="margin-left:1.1em;">{{ group.category }}</span>
      </h3>
    </a>
    <reveal>
      <transition-group name="list" tag="ul" v-show="display">
        <li v-for="experiment in group.entries" :key="experiment.name">
          <router-link :to="experiment.path">{{ experiment.name }}</router-link>
        </li>
      </transition-group>
    </reveal>
  </li>
</template>

<script>
import Reveal from "@/components/Reveal";

export default {
  components: {
    Reveal
  },
  props: ["group"],
  data() {
    return {
      display: true
    };
  }
};
</script>

<style lang="scss">
.arrow {
  display: inline-block;
  vertical-align: middle;
  margin-top: -1px;
  margin-left: 2px;
  margin-right: -14px;
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 5px solid #ccc;
  transition: transform 0.3s;

  &.arrow-rotate {
    transform: rotate(-90deg);
  }
}

.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
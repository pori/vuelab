<template>
  <button :class="`button ${theme}`">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["theme"]
};
</script>


<style lang="scss">
$primary: lightblue;

.button {
  padding: 1em;
  font-size: 1em;
  background: gray;
  border: 0;
  border-radius: 3px;
  transition: background 0.3s;
  cursor: pointer;

  &:hover {
    background: darken(gray, 10%);
  }

  &.primary {
    background: $primary;

    &:hover {
      background: darken($primary, 10%);
    }
  }
}
</style>

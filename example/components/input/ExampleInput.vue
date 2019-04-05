<template>
  <label>
    <slot></slot>
    <input v-bind="$attrs">
  </label>
</template>

<style lang="scss">
$primary: lightblue;
$black: #222;
$gray: gray;

label {
  font-family: "Helvetica Neue", sans-serif;
}

input {
  display: block;
  color: $black;
  font-size: 1em;
  border: 1px solid #ccc;
  padding: 0.5rem 0.8rem;
  border-radius: 3px;
  margin-top: 0.8rem;
  transition: all 0.5s;

  &:focus {
    border-color: $primary;
  }

  &::placeholder {
    color: $gray;
  }
}
</style>

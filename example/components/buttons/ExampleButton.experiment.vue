<template>
  <example-button ref="examplebutton" :theme="theme">{{ label }}</example-button>
</template>

<script>
import ExampleButton from "./ExampleButton";

export default {
  components: {
    ExampleButton
  },
  data() {
    return {
      theme: "primary",
      label: "Hello marco!"
    };
  }
};
</script>

<template>
  <transition name="reveal">
    <slot></slot>
  </transition>
</template>

<style lang="scss">
.reveal-enter-active,
.reveal-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.reveal-enter,
.reveal-leave-to {
  opacity: 0;
}
</style>
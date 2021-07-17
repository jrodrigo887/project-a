<template>
  <div class="shadow-md rounded-md sm:rounded-lg bg-white w-full h-full p-1 my-2 py-2 px-4">
    <header class="px-2 mb-2">
        <slot name="header"></slot>
    </header>
    <div class="mb-4">
      <slot>
      </slot>
    </div>    
      <footer class="pt-2">
          <slot name="footer">
          </slot>
      </footer>
  </div>
</template>

<script>
import CircleAvatar from './CircleAvatar.vue';

export default {
    name: 'Card',
    props: {

        image: {
            type: String,
            default: ''
        }
    },
    components: {
        CircleAvatar
    }
}
</script>

<style>

</style>
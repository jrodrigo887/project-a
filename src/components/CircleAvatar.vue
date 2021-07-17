<template>
  <div class="w-12 h-12 rounded-full bg-gray-400 flex justify-center items-center">
        <img v-if="image" :src="image" alt="Avatar">
        <h3 class="font-extrabold text-md text-white" v-else>{{ firstLetterName }}</h3>
  </div>
</template>

<script>
export default {
    props: {
        image: {
            type: String,
            default: ''
        },
        firstLetterName: {
            type: String,
            require: true
        }
    },
    methods: {
      
    }

}
</script>

<style>

</style>
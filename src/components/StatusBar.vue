<template>
    <div class="w-full h-6 bg-primary-light flex items-center bg-gray-300 shadow-md">
        <div class="w-full flex items-center justify-between px-6 space-x-2 text-gray-600 p-0 mr-2">
            <h4 class="py-0"> 10:15 </h4>
            <Wifi class="z-10 w-4 h-4"/>

        </div>
    </div>
</template>
<script>
import Wifi from './icons/Wifi.vue'

export default {
    name: 'StatusBar',
    components: {
        Wifi
    },
}
</script>
<style>
</style>
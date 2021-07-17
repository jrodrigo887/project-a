<template>
  <div>
    <StatusBar></StatusBar>
    <div class="px-5 mt-3">
      <h1 class="font-bold text-2xl">Boa Tarde!</h1>
      <p class="text-gray-400">Veja suas consultas aqui.</p>
    </div>

  <div class="overflow-y-auto px-4 mt-2">
  <h2>Consultas Atuais</h2>
    <CardItem v-for="item in profiles" :key="item.id"
            :nome="item.nome"
            :description="item.description"
            :situation="item.situation"
            :patientSituation="item.patientSituation"
            :scheduledDay="item.scheduledDay"
            :beforeTheTime="item.beforeTheTime"
            :startTime="item.startTime"
            :afterTheTime="item.afterTheTime"
            :servicePrice="item.servicePrice"
            :paymentStatus="item.paymentStatus"
            :image="item.image" />
  </div>
  </div>
</template>
<script>
import CardItem from '../components/CardItem.vue'
import StatusBar from '../components/StatusBar.vue'
import CircleAvatar from '../components/CircleAvatar.vue'
import { datasMock } from '../dados/datasMocks'

export default {
  name: 'Home',
  components: {
    CardItem,
    StatusBar,
    CircleAvatar
  },
  data() {
    return {
        profiles: []
    }
  },
  methods: {
    getProfiles() {
      const prof = datasMock()
      console.log(prof);
      this.profiles = prof;
    }
  },
  mounted() {
    this.getProfiles();
  }
}
</script>

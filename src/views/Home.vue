<template>
  <div>
    <StatusBar></StatusBar>
    <div class="px-5 mt-3">
      <h1 class="font-bold">Boa Tarde!</h1>
      <p>Veja suas consultas aqui.</p>
    </div>
  <div class="overflow-y-auto px-4">
    <Card v-for="item in profiles" :key="item.id">
      <template slot="header">
        <div class="flex space-x-1 mt-2">
          <h1 class="font-semibold">Dia 21</h1>
          <p>-</p>
          <p>{{ item.statTime }} hr</p>
        </div>
      </template>

      <template>
        <div class="flex w-full">
        <CircleAvatar :firstLetterName="'R'"/>
        <div class="w-full flex items-center justify-between">
          <div class="flex flex-col ml-3">
            <h1>{{ item.nome }}</h1>
            <small>{{ item.patientSituation }}</small>
          </div>
          <div>
            <h1>{{ item.paymentStatus }}</h1>
            <button>CONFIRMADO</button>
          </div>
        </div>
        </div>
      </template>

      <template slot="footer">
        <div class="border-t-2 border-gray-300"></div>
        <div>
          <p class="text-gray-500">{{'18:00 Horas Decorridas'}}</p>
        </div> 
      </template>
    </Card>
  </div>
  </div>
</template>
<script>
import Card from '../components/Card.vue'
import StatusBar from '../components/StatusBar.vue'
import CircleAvatar from '../components/CircleAvatar.vue'
import { datasMock } from '../dados/datasMocks'

export default {
  name: 'Home',
  components: {
    Card,
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

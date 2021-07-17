<template>
    <Card>
      <template slot="header">
        <div class="flex space-x-1 mt-2">
          <h1 class="font-semibold">Dia {{ getDay() }}</h1>
          <p>-</p>
          <p>{{ startTime }}hrs</p>
        </div>
      </template>

      <template>
        <div class="flex w-full">
        <CircleAvatar :firstLetterName="'R'"/>
        <div class="w-full flex items-center justify-between">
          <div class="flex flex-col ml-3 font-bold">
            <h1 class="text-gray-600">{{ nome }}</h1>
            <small class="text-gray-400">{{ patientSituation }}</small>
          </div>
          <div class="flex flex-col -mt-4">
            <h1 class="text-sm font-bold tracking-tight"
                :class="classColor()" >{{ paymentStatus }}</h1>
            
            <div class="bg-yellow-200 rounded-lg py-2 mt-2 font-bold tracking-tighter 
                text-center text-sm text-yellow-500">
                {{ servicePriceFormated() }}
            </div>
          </div>
        </div>
        </div>
      </template>

      <template slot="footer">
        <div class="border-t-2 border-gray-300"></div>
        <div>
          <p class="text-gray-500">{{ hours }} Horas Decorridas</p>
        </div> 
      </template>
    </Card>
</template>

<script>
import Card from './Card.vue'
import CircleAvatar from './CircleAvatar.vue'
import { compareDesc } from 'date-fns'

const colorPayment = {
    "CONFIRMADO": 'text-green-500 ',
    "PAGAR AGORA": 'text-red-800 ',
    "EM ANDAMENTO": 'text-yellow-600',
}

export default {
    name: 'CardItem',
    components: {
        Card,
        CircleAvatar
    },
    props: {
        nome: '',
        description: '',
        situation: '',
        scheduledDay: '',
        patientSituation: '',
        beforeTheTime: '',
        startTime: '',
        afterTheTime: '',
        servicePrice: '',
        paymentStatus: '',
        image: ''
    },
    data() {
        return {
            colorClassPayment: '',
            hours: null
        }
    },
    methods: {
        classColorSituation() {

        },
        classColor() {
            console.log(colorPayment[this.paymentStatus]);
            return colorPayment[this.paymentStatus]
        },
        getDay() {
            return this.scheduledDay.split('/')[0]
        },
        servicePriceFormated() {
            return 'R$' + this.servicePrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        }


    },
    computed: {
       getTime() {
            setInterval(() =>{
                    this.hours = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
            }, 1000)
       }
    }

}
</script>

<style>

</style>
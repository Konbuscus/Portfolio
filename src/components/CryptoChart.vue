<template>
  <div class="container">
    <line-chart
      v-if="loaded"
      :chartdata="chartdata"
      :options="options"/>
  </div>
</template>
<script>
import LineChart from './Line.vue'
import ProjectsService from "@/services/ProjectsService"

export default {
    name:'LineChartContainer',
    components: {LineChart},
    data: () => ({
        loaded: false,
        chartdata:null,
        options:null
    }),    
    async mounted(){
        this.loaded = false
        try{
            const cryptos =  await ProjectsService.getCryptos();
            this.chartdata = {};
            var data = [];
            this.options = {
               
            };  
            this.chartdata.datasets = [];
            this.chartdata.labels = [];

            for(var i = 0; i < cryptos.data.length; i++){
               
                var crypto = cryptos.data[i];
                console.log(crypto);
                this.chartdata.labels.push(crypto.crypto_name);
                data.push(crypto.crypto_last_date, crypto.crypto_last_price_usd, crypto.crypto_last_price_eur);
            }
            this.chartdata.datasets.push({data: data,
                                        borderColor: "#62C3A6",
                                        pointBackgroundColor: "#62C3A6",
                                        pointBorderColor: "#fff",
                                        pointHoverBackgroundColor: "#fff",
                                        pointHoverBorderColor: "rgba(47, 91, 224,1)",
                                        });
            this.loaded = true;
        }catch(e){
            console.log(e);
        }

    }
}
</script>
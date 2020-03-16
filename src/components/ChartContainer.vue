<template>
    <div class="container">
        <radar-chart
      v-if="loaded"
      :chartdata="chartdata"
      :options="options"/>
    </div>
</template>

<script>
import RadarChart from './Radar.vue'
import ProjectsService from "@/services/ProjectsService"

export default {
    name:'RadarChartContainer',
    components: {RadarChart},
    data: () => ({
        loaded: false,
        chartdata:null,
        options:null
    }),    
    async mounted(){

        this.loaded = false
        try{
            
            const skillsList =  await ProjectsService.getSkills();
            this.chartdata = {};
            var data = [];
            this.options = {
                responsive: true,
                maintainAspectRatio: false,
                scale: {
                angleLines: {
                    display: true
                },
                ticks: {
                    suggestedMin: 50,
                    suggestedMax: 100
                    }
                }
            };  
            this.chartdata.datasets = [];
            this.chartdata.labels = [];
            for(var i = 0; i < skillsList.data.data.length; i++){

                var skill = skillsList.data.data[i];
                this.chartdata.labels.push(skill.name);
                data.push(skill.percentage);
            }
            this.chartdata.datasets.push({data: data,
                                        borderColor: "#62C3A6",
                                        pointBackgroundColor: "#62C3A6",
                                        pointBorderColor: "#fff",
                                        pointHoverBackgroundColor: "#fff",
                                        pointHoverBorderColor: "rgba(47, 91, 224,1)",
                                        label:"Mastering rate"});
            this.loaded = true;
        }catch(e){
            console.log(e);
        }

    }
}
</script>
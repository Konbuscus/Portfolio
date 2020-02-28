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
            for(var i = 0; i < skillsList.data.records.length; i++){

                var skill = skillsList.data.records[i];
                this.chartdata.labels.push(skill.fields["Skill"]);
                data.push(skill.fields["Percentage"]);
            }
            this.chartdata.datasets.push({data: data,
                                        borderColor: "rgb(65, 105, 225)",
                                        pointBackgroundColor: "rgba(47, 91, 224,1)",
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
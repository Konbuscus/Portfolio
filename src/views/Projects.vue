<template>
    <div>
        <section class="hero is-medium is-primary is-bold">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title is-2">
                        Projects that I have built
                    </h1>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="container is-fluid">
                <div class="columns is-multiline">
                        <div class="column is-one-third" v-bind:key="project.slug" v-for="project in projects">
                            <post-card v-bind="project"></post-card>
                        </div>              
                </div>
            </div>
        </section>
    </div>
</template>

<script>

import ProjectsService from "@/services/ProjectsService"
import PostCard from "@/components/PostCard"

export default {
  name: "projects",
  components: {
    PostCard
  },
  data(){
    return {
      airTableResponse: []
    }
  },
  mounted: function (){
    let self = this;
    async function getProjects(){
      try{
        const response = await ProjectsService.getProjects();
        self.airTableResponse = response.data.records;
      }catch(err){
        console.log(err);
      }
    }
    getProjects();
  },
  computed:{
    projects(){
      let self = this;
      let projectList = [];
      for(var i = 0; i  < self.airTableResponse.length; i++){

        if(self.airTableResponse[i].fields.Published){

          let project = {
            title: self.airTableResponse[i].fields.Title,
            date: self.airTableResponse[i].fields['Date Published'],
            snippet: self.airTableResponse[i].fields.Excerpt,
            image: self.airTableResponse[i].fields.Image[0].url,
            slug: self.airTableResponse[i].fields.Slug
          }
          projectList.push(project);
        }
      }
      return projectList; 
    }
  }
};
</script>

<style type="text/css">
.hero-body{
  background-color: royalblue;
}
</style>

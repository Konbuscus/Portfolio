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
      result: []
    }
  },
  mounted: function (){
    let self = this;
    async function getProjects(){
      try{
        const response = await ProjectsService.getProjects();
        self.result = response.data.data;
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
      for(var i = 0; i  < self.result.length; i++){

        if(self.result[i].Published){

          let project = {
            title: self.result[i].Title,
            date: self.result[i].DatePublished,
            snippet: self.result[i].Excerpt,
            image: self.result[i].Image,
            slug: self.result[i]._id
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

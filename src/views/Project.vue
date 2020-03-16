<template>
    <div>
        <section class="hero is-medium is-primary is-bold">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title is-2">
                        {{project.title}}
                    </h1>
                    <h2 class="subtitle is-4">
                        {{project.snippet}}
                    </h2>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="container is-fluid">
                <div class="columns">
                    <div class="column is-two-thirds">
                       <VueShowdown :markdown="project.body" flavor="github"></VueShowdown>
                    </div>
                    <div class="column is-one-third">
                        <div class="columns is-multiline">
                            <div class="column is-full" v-bind:key="image.slug" v-for="image in project.images">
                                <img :src="image.url"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import ProjectsService from '@/services/ProjectsService'
    export default {
        name: "project",
        data() {
            return{
                result: []
            }
        },
        mounted: function () {
            let self = this;
            async function getProject() {
                try{
                    const response = await ProjectsService.getProject(self.$route.params.Slug)
                    self.result = response.data;

                }catch(err){
                    console.log(err)
                }
            }
            getProject()            
        },
        computed: {
            project(){
                let self = this;
                let thisProject = {};
                if (self.result.data){
                    thisProject = {
                        title: self.result.data.Title,
                        snippet: self.result.data.Excerpt,
                        images: self.result.data.Image,
                        body: self.result.data.Body
                    }
                    return thisProject
                }
                return this.thisProject;
            }
        }
    };
</script>
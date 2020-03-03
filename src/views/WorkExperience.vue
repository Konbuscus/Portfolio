<template>
    <div>
        <section class="hero is-medium is-primary is-bold">
			<div class="hero-body">
				<div class="container">
					<h1 class="title is-2">
						Work Experiences
					</h1>
				</div>
			</div>
        </section>
        <section class="section">
            <div class="container">
                <div class="columns is-centered"  v-bind:key="work.slug" v-for="work in works">
                <WorkExperiencesBox v-bind="work"></WorkExperiencesBox>
                <br>
                </div>
                
            </div>
        </section>
</div>
</template>

<style type="text/css">
.work {
	height: 100%;
    width: 50%
}
.tech-box-title {
	margin-top: 1.5rem;
}
</style>

<script>

import WorkExperiencesBox from '../components/WorkExperiencesBox.vue'
import ProjectsService from "@/services/ProjectsService"

export default {
 name: "workexperiences",
 components : {"WorkExperiencesBox": WorkExperiencesBox},
 data(){
		return {
			airTableResponse: []
		}
	},
	mounted: function(){
		let self = this;
		async function getWorkExperiences(){
			try{
				const response = await ProjectsService.getWorkExperiences();
				self.airTableResponse = response.data.records;
			}catch(err){
				console.log(err);
			}
		}
		getWorkExperiences();
	},
	computed:{
		works(){
			let self = this;
			let workExperiencesList = [];
			for(var i = 0; i < self.airTableResponse.length; i++){
				let workExperience = {
                    where: self.airTableResponse[i].fields.Where,
                    as: self.airTableResponse[i].fields.As,
                    description:self.airTableResponse[i].fields.Description,
                    date: self.airTableResponse[i].fields.Date,
                    stillActive: self.airTableResponse[i].fields.StillActive,
                    logo: self.airTableResponse[i].fields.CompanyLogo[0].url,
					slug: self.airTableResponse[i].fields.Slug
				}
				workExperiencesList.push(workExperience);
			}
            workExperiencesList.sort((a, b) => parseInt(a.slug) - parseInt(b.slug));
			return workExperiencesList;
		}
	}
};
</script>
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
			result: []
		}
	},
	mounted: function(){
		let self = this;
		async function getWorkExperiences(){
			try{
				const response = await ProjectsService.getWorkExperiences();
				self.result = response.data.data;
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
			for(var i = 0; i < self.result.length; i++){
				let workExperience = {
                    where: self.result[i].Where,
                    as: self.result[i].As,
                    description:self.result[i].Description,
                    date: self.result[i].Date,
                    stillActive: self.result[i].StillActive,
                    logo: self.result[i].CompanyLogo,
					slug: self.result[i]._id
				}
				workExperiencesList.push(workExperience);
			}
            workExperiencesList.sort((a, b) => parseInt(a.slug) - parseInt(b.slug));
			return workExperiencesList;
		}
	}
};
</script>
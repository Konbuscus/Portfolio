<template>
    <div>
        <section class="hero is-medium is-primary is-bold">
			<div class="hero-body">
				<div class="container">
					<h1 class="title is-2">
						Education
					</h1>
				</div>
			</div>
        </section>
        <section class="section">
            <div class="container">
                <div class="columns is-centered"  v-bind:key="ed.slug" v-for="ed in education">
                <education-box v-bind="ed"></education-box>
                <br>
                </div>
                
            </div>
        </section>
</div>
</template>

<style type="text/css">
.box {
	height: 100%;
    width: 50%
}
.tech-box-title {
	margin-top: 1.5rem;
}
</style>

<script>

import EducationBox from '../components/EducationBox.vue'
import ProjectsService from "@/services/ProjectsService"

export default {
 name: "education",
 components : {"EducationBox": EducationBox},
 data(){
		return {
			airTableResponse: []
		}
	},
	mounted: function(){
		let self = this;
		async function getEducation(){
			try{
				const response = await ProjectsService.getEducation();
				self.airTableResponse = response.data.records;
			}catch(err){
				console.log(err);
			}
		}
		getEducation();
	},
	computed:{
		education(){
			let self = this;
			let educationList = [];

			for(var i = 0; i < self.airTableResponse.length; i++){
				let education = {
					graduation: self.airTableResponse[i].fields.Graduation,
					where: self.airTableResponse[i].fields.Where,
                    date: self.airTableResponse[i].fields.Date,
					logo: self.airTableResponse[i].fields.EntityLogo[0].url,
					slug: self.airTableResponse[i].fields.Slug
				}
				educationList.push(education);
			}
            educationList.sort((a, b) => parseInt(a.slug) - parseInt(b.slug));
			return educationList;
		}
	}
};
</script>
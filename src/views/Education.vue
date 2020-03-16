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
                <div class="columns is-mobile is-multiline is-centered"  v-bind:key="ed.slug" v-for="ed in education">
                <education-box v-bind="ed"></education-box>
                <br>
                </div>
                
            </div>
        </section>
</div>
</template>

<style type="text/css">
.education {
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
			result: []
		}
	},
	mounted: function(){
		let self = this;
		async function getEducation(){
			try{
				const response = await ProjectsService.getEducation();
				self.result = response.data.data;
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

			for(var i = 0; i < self.result.length; i++){
				let education = {
					graduation: self.result[i].Graduation,
					where: self.result[i].Where,
                    date: self.result[i].Date,
					logo: self.result[i].EntityLogo,
					slug: self.result[i].Slug
				}
				educationList.push(education);
			}
            educationList.sort((a, b) => parseInt(a.slug) - parseInt(b.slug));
			return educationList;
		}
	}
};
</script>
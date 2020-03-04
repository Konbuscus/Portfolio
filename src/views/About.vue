<template>
	<div>
		<section class="hero is-medium is-primary is-bold">
			<div class="hero-body">
				<div class="container">
					<h1 class="title is-2">
						Meet Me ! 
					</h1>
				</div>
			</div>
		</section>
		<section class="section">
			<h2 class="title is-3 has-text-weight-medium has-text-centered">
				What I Bring
			</h2>
			<div class="container">
				<div class="columns">
					<div class="column">
						<div class="box">					
							<h3 class="title is-4 has-text-weight-medium">
								Front End Focus
							</h3>
							<p>
								Focused on building robust system with ASP.NET and C# that are well designed and functional.
							</p>
						</div>
					</div>
					<div class="column">
						<div class="box">
							<h3 class="title is-4 has-text-weight-medium">
								Full Stack Experience
							</h3>
							<p>
								Experience working across the application stack using APIs, Node, Mongo, and Heroku to deliver production applications from design to deployment.
							</p>
						</div>
					</div>
					<div class="column">
						<div class="box">
							<h3 class="title is-4 has-text-weight-medium">
								Broad Business Exposure
							</h3>
							<p>
								4 years of  experience as a software engineer. Managed and contributed to development, UX, service, and operations.
							</p>
						</div>
					</div>			
				</div>
			</div>
		</section>
		<section class="section">
			<h2 class="title is-3 has-text-weight-medium has-text-centered">
				Technologies I've Worked With
			</h2>
			<div class="container">
				<div class="columns is-centered">

					<div class="column is-one-fifth" v-bind:key="tech.slug" v-for="tech in techs">
						<box-tech v-bind="tech"></box-tech>
					</div>
				</div>
        <RadarChart/>
				<p class="tech-box-title title is-4 has-text-weight-light has-text-centered">Web API's • Mongodb • C# • Python • Postgresql</p>
			</div>
		</section>
		<section class="section has-background-light">
			<h2 class="title is-3 has-text-weight-medium has-text-centered">
				What Drives Me
			</h2>
			<div class="container">
				<div class="columns is-centered">
					<div class="column is-half content">
						<ul>
							<li><Strong>An innate desire to learn:</Strong>Technologies are evolving and so do we</li>
							<li><Strong>Compassion for users:</Strong> I strive to make products that give put users first.</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<style type="text/css">
.box {
	height: 100%;
}
.tech-box-title {
	margin-top: 1.5rem;
}
</style>

<script>
import RadarChart from '../components/ChartContainer.vue'
import BoxTech from '../components/BoxTech.vue'
import ProjectsService from "@/services/ProjectsService"

	export default {
    name: "about",
	components: {"RadarChart": RadarChart,"BoxTech": BoxTech},
	data(){
		return {
			result: []
		}
	},
	mounted: function(){
		let self = this;
		async function getTechs(){
			try{
				const response = await ProjectsService.getTechs();
				self.result = response.data.data;
			}catch(err){
				console.log(err);
			}
		}
		getTechs();
	},
	computed:{
		techs(){
			let self = this;
			let techsList = [];

			for(var i = 0; i < self.result.length; i++){
				let tech = {
					title: self.result[i].Title,
					description: self.result[i].Description,
					image: self.result[i].Logo,
					slug: self.result[i].Slug
				}
				techsList.push(tech);
			}
			return techsList;
		}
	}
}
</script>

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
					<div class="column is-one-fifth">
						<div class="box">
							<figure class="image is-square">
								<img src="../assets/vue-logo.png" alt="Placeholder image">
							</figure>
							<h3 class="tech-box-title title is-4 has-text-weight-medium has-text-centered">
								Vue.js
							</h3>
							<p>
								This portfolio is made with vue
							</p>
						</div>
					</div>
					<div class="column is-one-fifth">
						<div class="box">
							<figure class="image is-square">
								<img src="../assets/js-logo.png" alt="Placeholder image">
							</figure>
							<h3 class="tech-box-title title is-4 has-text-weight-medium has-text-centered">
								JavaScript
							</h3>
							<p>
								Proficient in ES6 and ES5 JS
							</p>
						</div>
					</div>
					<div class="column is-one-fifth">
						<div class="box">
							<figure class="image is-square">
								<img src="../assets/aspnet-logo.png" alt="Placeholder image">
							</figure>
							<h3 class="tech-box-title title is-4 has-text-weight-medium has-text-centered">
								ASP.NET
							</h3>
							<p>
								Web application wrote wih ASP.NET and .NET Core
							</p>
						</div>
					</div>
					<div class="column is-one-fifth">
						<div class="box">
							<figure class="image is-square">
								<img src="../assets/database-logo.png" alt="Placeholder image">
							</figure>
							<h3 class="tech-box-title title is-4 has-text-weight-medium has-text-centered">
								Databases
							</h3>
							<p>
							Familiar with NoSQL and SQL Databases
							</p>
						</div>
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
	export default {
    name: "about",
    components: {RadarChart}
	};
</script>
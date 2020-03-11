<template>
	<div>
		<section class="hero is-medium is-primary is-bold">
			<div class="hero-body">
				<div class="container">
					<h1 class="title is-2">
						Get In Touch
					</h1>
				</div>
			</div>
		</section>
		<section class="section">
			<div class="container">
				<div class="columns is-centered">
					<div class="column is-one-third">
						<div class="box">					
							<div v-bind:key="cont.slug" v-for="cont in contacts">
								<contact-content v-bind="cont"></contact-content>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>


<script>

import ContactContent from '../components/ContactContent.vue'
import ProjectService from "@/services/ProjectsService"

export default {
  name: "contact",
  components : {"ContactContent": ContactContent},
  data(){
	return {
		result: []
	}
  },
  mounted: function(){
	let self = this;
	async function getContacts(){
		try{
			const response = await ProjectService.getContacts();
			self.result = response.data.data;
		}catch(err){
			console.log(err);
		}
	}
	getContacts();
	},
	computed : {
		contacts(){
		let self = this;
		let contactList = [];

		for(var i  = 0; i < self.result.length; i++){
			let contact =  {
				Network: self.result[i].Network,
				Value: self.result[i].Value,
				Title: self.result[i].Title,
				slug: self.result[i]._id
				}
			contactList.push(contact);
		}
		return contactList;
		}
	}
};
</script>

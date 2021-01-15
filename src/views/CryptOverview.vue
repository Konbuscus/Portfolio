<template>
    <div>
        <section class="hero is-medium is-primary is-bold">
			<div class="hero-body">
				<div class="container">
					<h1 class="title is-2">
						CryptOverview
					</h1>
				</div>
			</div>
        </section>
        <section class="section">
            <div class="container">
               <CryptoChart/>
			</div>
        </section>
	</div>
</template>
<script>
import CryptoChart from '../components/CryptoChart.vue'
import ProjectsService from "@/services/ProjectsService"


</script>
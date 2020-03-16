<template>
    <div class="post-card">
        <div class="card">
            <div class="card-image">
                <figure class="image is-5by3">
                    <img :src="image" alt="Placeholder image" >
                </figure>
            </div>
        <div class="card-content">
            <div class="media">
                <div class="media-content">
                    <p class="title is-4"> {{title}}</p>
                    <p class="subtitle is-6"> {{date}} </p>
                </div>
            </div>
            <div class="content">
                <p> {{snippet}}</p>
                <a class="button is-fullwidth" :href="snippet" target="_blank">View Project </a>
                <!--<router-link :to="'/project/'+slug" class="button is-fullwidth"> View Project </router-link>-->
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name:"PostCard",
    props: {
        title: String,
        date: String,
        snippet: String,
        image: String,
        slug: String
    }
};
</script>
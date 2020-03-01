<template>
        <div class="box">
            <figure class="image is-square">
            <img :src="image" />
            </figure>
            <h3 class="tech-box-title title is-4 has-text-weight-medium has-text-centered">{{title}}</h3>
            <p>{{description}}</p>
        </div>
</template>


<script>
export default {
    name:"BoxTech",
    props: {
        title: String,
        description: String,
        image: String,
        slug: String
    }
}
</script>
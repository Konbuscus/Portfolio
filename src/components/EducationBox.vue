<template>
        <div class="box">
            <article class="media">
                <div class="media-left">
                    <figure class="image is-128x128">
                        <img :src="logo" />
                    </figure>
                </div>
                <div class="media-content">
                    <div class="content">
                        <h4 class="tech-box-title title is-4 has-text-weight-medium has-text-centered">{{graduation}}</h4>
                        <p>{{where}} : {{date}}</p>
                    </div>
                </div>
            </article>
        </div>
</template>


<script>
export default {
    name:"EducationBox",
    props: {
        graduation: String,
        where: String,
        date: String,
        logo: String,
        slug: String
    }
}
</script>
<template>
        <div class="box work" >
            <article class="media">
                <div class="media-left">
                    <figure class="image is-128x128">
                        <img :src="logo" />
                    </figure>
                </div>
                <div class="media-content">
                    <div class="content">
                        <h4 class="tech-box-title title is-4 has-text-weight-medium has-text-centered">{{where}} : {{as}} </h4>
                        <p>{{description}} : {{date}}</p>
                        <p>Still there ?</p>
                        <img v-if="stillActive" src="../../public/images/ok.png"  /> <img v-else src="../../public/images/no.png"/> 
                    </div>
                </div>
            </article>
        </div>
</template>

<script>
export default {
    name:"WorkExperiencesBox",
    props: {
        where: String,
        slug: String,
        as: String,
        description: String,
        date: String,
        stillActive: Boolean,
        logo: String
    }
}
</script>
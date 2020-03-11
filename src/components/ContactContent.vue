<template>
    <div>
       <p class="is-size-4 has-text-weight-medium"><strong>{{Network}}</strong></p>
        <p><a :href="Value">{{Value}}</a></p><br>
    </div>
</template>


<script>

export default {
    name:"ContactContent",
    props: {
        Network: String,
        Value: String,
    }
}
</script>
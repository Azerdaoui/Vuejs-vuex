<template>
    <div class="hello">
        <Numbers />
        {{ sum }}
        <p>You have generated {{ totalNumbers }} random numbers</p>
    </div>
</template>

<script>
import Numbers from './Numbers'
export default {
    name: 'Sum',
    computed: {
        sum(){
            return this.$store.getters.sum
        },
        totalNumbers(){
            return this.$store.getters.totalNumbers
        }
    },
    components:{
        Numbers,
    }
}
</script>

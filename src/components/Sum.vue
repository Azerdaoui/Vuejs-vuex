<template>
    <div class="hello">
        <Numbers />
        {{ sum }}
    </div>
</template>

<script>
import Numbers from './Numbers'
export default {
    name: 'Sum',
    computed: {
        sum(){
            return this.$store.getters.sum
        }
    },
    components:{
        Numbers,
    }
}
</script>

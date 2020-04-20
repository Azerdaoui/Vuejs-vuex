<template>
    <div class="hello">
        <Numbers />
        {{ sum }}
        <p>You have generated {{ totalNumbers }} random numbers</p>
    </div>
</template>

<script>
import Numbers from './Numbers'
import { mapGetters } from 'vuex'

export default {
    name: 'Sum',
    computed: {
        ...mapGetters({
            sum: 'sum',
            total: 'totalNumbers'
        })
    },
    components:{
        Numbers,
    }
}
</script>

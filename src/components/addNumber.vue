<template>
    <div>
        <a href="#" @click.prevent="fetchNumbers()">Add random number</a>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: "add-number",
    methods: {
        ...mapActions({
            fetchNumbers: 'fetchNumbers'
        })
    }
}
</script>
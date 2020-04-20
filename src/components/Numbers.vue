<template>
    <ul>
        <li 
            v-for="(number, index) in numbers" 
            :key="index">{{ number }}
        </li>
    </ul>
</template>

<script>
export default {
    name: 'numbers',
        computed: {
        numbers(){
            return this.$store.getters.numbers
        }
    }
}
</script>
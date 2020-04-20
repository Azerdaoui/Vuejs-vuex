<template>
    <div>
        <addNumber />
        <ul>
            <li 
                v-for="(number, index) in numbers" 
                :key="index">{{ number }}
            </li>
        </ul>
        <hr>
    </div>

</template>

<script>
import addNumber from './addNumber'
export default {
    name: 'numbers',
    computed: {
        numbers(){
            return this.$store.getters.numbers
        }
    },
    components: {
        addNumber
    }
}
</script>
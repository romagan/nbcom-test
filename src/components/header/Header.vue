<template>
    <header class="header">
        <div class="container">
            <h1>{{ isTotal ? `Результат` : `Выберите настройки`}}</h1>
        </div>
    </header>
</template>
        
<script>
    export default {
        name: `Header`,
        components: {
            
        },
        props: {
            isTotal: Boolean
        },
        data() {
            return {
                
            }
        },
        computed: {
            
        },
        mounted() {
            
        },
        methods: {
            
        }
    }
</script>

<style src="./header.scss" lang="scss"></style>
<template>
    <main class="main">
        
    </main>
</template>
        
<script>
    import ApiService from '../../mixins/api';
    // import axios from 'axios';

    export default {
        name: `Main`,
        components: {
            
        },
        props: {
            
        },
        data() {
            return {
                
            }
        },
        computed: {
            
        },
        async created() {
            const api = new ApiService();
            api.getResource().then((res) => {
                console.log(res)
            })
        },
        methods: {
            
        }
    }
</script>
<template>
    <div class="total">
        <div class="container">
            <h2>Параметры</h2>
            <table>
                <thead>
                    <tr>
                        <td>Название</td>
                        <td>Значение</td>
                    </tr>
                </thead>
                <tbody>
                    <!-- eslint-disable-next-line -->
                    <tr v-for="(value, name) in params">
                        <td>{{ value }}</td>
                        <td>{{ name }}</td>
                    </tr>
                </tbody>
            </table>

            <h2>Комплектация</h2>
            <table>
                <thead>
                    <tr>
                        <td>Название</td>
                        <td>Значение</td>
                    </tr>
                </thead>
                <tbody>
                    <!-- eslint-disable-next-line -->
                    <tr v-for="(value, name) in kit">
                        <td>{{ value }}</td>
                        <td>{{ name }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
        
<script>
    import { mapGetters } from 'vuex';

    export default {
        name: `Total`,
        components: {
            
        },
        props: {
            
        },
        data() {
            return {
                
            }
        },
        computed: {
            ...mapGetters('params', {
                params: 'params',
                kit: 'kit'
            }),
        },
        mounted() {
            
        },
        methods: {
            
        }
    }
</script>

<style src="./total.scss" lang="scss"></style>

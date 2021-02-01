<template>
    <div class="container">
        <div v-if="params" class="params">
            <!-- eslint-disable-next-line -->
            <accordion
                v-for="(param, i) in params"
                component="Param"
                :title="param.title"
                :data="param"
                :startOpened="i === 0 ? true : false"
                :i="i"
                @toggle="onToggleItem"
                >
            </accordion>
            <div class="check-btn">
                <button type="button" @click.prevent="$emit(`total`)">Рассчитать</button>
            </div>
        </div>
    </div>
</template>
        
<script>
    import Vue from 'vue';
    import Accordion from '../accordion/Accordion.vue';
    import Param from '../param/Param.vue';
    Vue.component(`Param`, Param);
    import ApiService from '../../mixins/api';

    export default {
        name: `Main`,
        components: {
            Accordion
        },
        props: {
            
        },
        data() {
            return {
                params: null,
                activeParam: null,
                activeIndex: null
            }
        },
        computed: {
            
        },
        created() {
            const api = new ApiService();
            this.params = api.data;
            api.getResource().then(() => {
            }).catch((err) => console.log(err, 'eee'))
        },
        methods: {
            onToggleItem(e, i) {
                if (this.activeParam && i !== this.activeIndex) {
                    this.activeParam.closeAccordion();
                }

                this.activeParam = e;
                this.activeIndex = i
            }
        }
    }
</script>

<style src="./main.scss" lang="scss"></style>
<template>
    <ul class="radio-group">
        <!-- eslint-disable-next-line -->
        <li v-for="(item, i) in data.config">
            <div class="radio">
                <input
                    class="visually-hidden"
                    type="radio"
                    v-model="value"
                    :id="`radio-${data.code}-${i}`"
                    :name="data.code"
                    :value="item.text"
                    :disabled="item.add === false ? true : false"
                    @change="onChangeListener(item)">
                <label class="radio__label" :for="`radio-${data.code}-${i}`">{{ item.text }}</label>
            </div>
        </li>
    </ul>
</template>

<script>
    export default {
        name: `Param`,
        components: {

        },
        props: {
            data: Object
        },
        data() {
            return {
                value: this.data.config[0].text
            }
        },
        computed: {

        },
        created() {
            this.changeValue(this.data.config[0]);
        },
        methods: {
            onChangeListener(value) {
                this.$nextTick(() => this.changeValue(value))
            },
            changeValue(value) {
                this.$store.dispatch('params/addParam', {
                    'type': value.bundle ? 'kit' : 'param',
                    'name': this.data.title,
                    'value': value.text
                })
            }
        }
    }
</script>

<style src="./param.scss" lang="scss"></style>
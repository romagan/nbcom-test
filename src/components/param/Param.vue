<template>
    <div v-if="data.config">
        <ul class="radio-group">
            <!-- eslint-disable-next-line -->
            <li v-for="(param, i) in data.config">
                <div class="radio">
                    <input class="visually-hidden"
                        :value="param.text"
                        type="radio"
                        :id="`radio-${data.code}-${i}`"
                        :name="data.code"
                        v-model="value"
                        :disabled="param.add === false ? true : false"
                        @change="onChangeListener(param)"
                        />
                    <label class="radio__label"
                        :for="`radio-${data.code}-${i}`">
                        {{ param.text }}
                    </label>
                </div>
            </li>
        </ul>
    </div>
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
                this.$nextTick(() => this.changeValue(value));
            },
            changeValue(value) {
                this.$store.dispatch(`params/addParam`, {
                    'name': this.data.title,
                    'value': value.text,
                    'type': value.bundle ? 'kit' : 'param'
                    });
            }

        }
    }
</script>
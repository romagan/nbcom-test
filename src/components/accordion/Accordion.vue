<template>
    <div class="accordion">
        <slot name="accordion-header">
            <button class="btn btn_block accordion__btn"
                    type="button"
                    ref="accordion_btn"
                    :class="activeClass"
                    v-html="title"
                    @click.prevent="toggleAccordion">
            </button>
        </slot>
        <div class="accordion__content" ref="accordion_content">
            <slot name="additional-data-top"></slot>
            <component
                :is="component" 
                :data="data" 
                :type="type" 
                @emittedEvent="emittedEvent"
            ></component>
            <slot name="additional-data-bottom"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: `Accordion`,
        components: {

        },
        props: {
            i: Number,
            title: String,
            component: String,
            data: [Array, Object],
            startOpened: {
                type: Boolean,
                default: false
            },
            type: String,
        },
        data() {
            return {
                contentHeight: 0,
                isOpened: this.startOpened
            }
        },
        computed: {
            activeClass() {
                return this.isOpened ? 'accordion__btn_active' : '';
            }
        },
        mounted() {
            const $content = this.$refs.accordion_content;
            this.contentHeight = $content.offsetHeight;

            if (this.isOpened) {
                $content.style.maxHeight = `${this.contentHeight}px`;
                this.$emit(`toggle`, this, this.i);
            } else {
                $content.style.maxHeight = 0;
            }
        },
        methods: {
            toggleAccordion() {
                const $content = this.$refs.accordion_content;

                $content.style.maxHeight = this.isOpened ?  0 : `${this.contentHeight}px`;

                if (!this.isOpened) {
                    this.$emit(`toggle`, this, this.i);
                } else {
                    this.$emit(`toggle`, null, this.i);
                }

                this.isOpened = !this.isOpened;
            },
            closeAccordion() {
                const $content = this.$refs.accordion_content;

                $content.style.maxHeight = this.isOpened ?  0 : `${this.contentHeight}px`;

                this.isOpened = false;
            },
            emittedEvent(prop) {
                this.$emit('emittedEvent', prop)
            }
        }
    }
</script>

<style src="./accordion.scss" lang="scss"></style>

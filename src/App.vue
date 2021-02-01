<template>
	<div id="app">
		<header-block :isTotal="isTotal"></header-block>
		<main class="main">
			<main-block v-if="!isTotal" @total="isTotal = true"></main-block>
			<total v-else></total>
		</main>
		<footer-block></footer-block>
	</div>
</template>

<script>
	import HeaderBlock from './components/header/Header.vue';
	import MainBlock from './components/main/Main.vue';
	import Total from './components/total/Total.vue';
	import FooterBlock from './components/footer/Footer.vue';

	export default {
		name: 'App',
		components: {
			HeaderBlock,
			MainBlock,
			Total,
			FooterBlock,
		},
		data() {
			return {
				isTotal: false
			}
		}
}
</script>

<style src="./app.scss" lang="scss"></style>
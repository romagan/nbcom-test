<template>
	<div id="app">
		<header-block></header-block>
		<main-block></main-block>
		<footer-block></footer-block>
	</div>
</template>

<script>
	import HeaderBlock from './components/header/Header.vue';
	import MainBlock from './components/main/Main.vue';
	import FooterBlock from './components/footer/Footer.vue';

	export default {
		name: 'App',
		components: {
			HeaderBlock,
			MainBlock,
			FooterBlock,
		}
}
</script>

<style src="./app.scss" lang="scss"></style>
<template>
	<img class="mx-auto" alt="Vue logo" src="./assets/logo.png" />
	<button data-test="dark-mode" class="btn example" @click="toggleDarkMode">
		Toggle Dark Mode
	</button>
	<HelloWorld msg="Hello Vue 3.0 + Vite + Tailwind 2.0" />
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import useTailwindDarkMode from './tailwind-dark-mode';
import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
	name: 'App',
	components: {
		HelloWorld,
	},
	setup() {
		const {toggleDarkMode} = useTailwindDarkMode();

		return {toggleDarkMode};
	},
});
</script>

<style>
.example {
	@apply border-4 border-green-600 dark:border-red-600 shadow-lg;
}
</style>

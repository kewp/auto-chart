const config = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
		"../style.js"
	],
	theme: {
		extend: {},
	},
	plugins: [],
};

module.exports = config;

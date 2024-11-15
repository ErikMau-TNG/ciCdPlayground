import App from './App.svelte';

new App({
	target: document.body,
	props: {
		// What's your name?
		name: 'Erik Mau',
		// In the following fiels you can either give a single string, 
		// or an array of bullet points
		
		// What do you associate with the term 'CI/CD'?
		associations: [
			'Scripts in strange programming languages',
			'Some mysterious technology preventing me from breaking production code'
		],
		// Which CI/CD tools do you use in your project?
		tools: ':tekton:',
		// What do you want to learn in this workshop? 
		expectations: [
			'gain knowledge about the basics of CI/CD'
		],
		// What do you like to do when you're not coding?
		hobbies: [
			'reading books', 
			'volleyball',
			'playing computer games'
		]
	}
});

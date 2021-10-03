module.exports = {
	title: 'Learn Pinia',
	description: 'Learn Pinia State Management by building a Todo App',
	lang: 'en-US',
	base: '/learn-pinia/',
	themeConfig: {
		markdown: {
			lineNumbers: true
		},
		nav: [
			{ text: 'Guide', link: '/introduction' },
			{
				text: 'Contact',
				items: [
					{ text: 'Email', link: 'mailto:yapyeeqiang@gmail.com' },
					{
						text: 'WhatsApp',
						link: 'https://wa.me/60198248014?text=Hello%20Yap',
					},
				],
			},
			{ text: 'Github', link: 'https://github.com/yapyeeqiang/pinia-todo-app' },
		],
		sidebar: {
			'/': [
				{
					text: 'Introduction',
					children: [
						{
							text: 'What is Pinia?',
							link: '/introduction.html',
						},
						{
							text: 'Getting Started',
							link: '/getting-started.html',
						},
					],
				},
				{
					text: 'Core Concepts',

					children: [
						{
							text: 'Defining a Store',
							link: '/core-concepts/',
						},
						{ text: 'State', link: '/core-concepts/state.html' },
						{ text: 'Getters', link: '/core-concepts/getters.html' },
						{ text: 'Actions', link: '/core-concepts/actions.html' },
					],
				},
				{
					text: 'Start Building',
					children: [
						{ text: 'Introduction', link: '/todo-app/' },
						{ text: 'Build with Options API', link: '/todo-app/options-api.html' },
						{ text: 'Integrate Pinia', link: '/todo-app/integrate-pinia.html' },
					],
				},
			],
		},
	},
};

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('@/views/Home.vue'),
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('@/views/About.vue'),
	},
	{
		path: '/event-list',
		name: 'Events',
		component: () => import('@/views/Events.vue'),
	},
	{
		path: '/event-create',
		name: 'Create',
		component: () => import('@/views/Create.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import('@/views/Home.vue'),
	},
	{
		path: '/about',
		name: 'about',
		component: () => import('@/views/About.vue'),
	},
	{
		path: '/events/event-list',
		name: 'event-list',
		component: () => import('@/views/EventList.vue'),
	},
	{
		path: '/event/:id',
		name: 'event-show',
		props: true,
		component: () => import('@/views/EventShow.vue'),
	},
	{
		path: '/events/event-create',
		name: 'event-create',
		component: () => import('@/views/EventCreate.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;

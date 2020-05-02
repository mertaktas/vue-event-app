import Vue from 'vue';
import Vuex from 'vuex';
import EventService from '@/services/EventService.js';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		user: { id: 'abc123', name: 'Adam Jahr' },
		categories: [
			'sustainability',
			'nature',
			'animal welfare',
			'housing',
			'education',
			'food',
			'community',
		],
		events: [],
		event: [],
	},
	getters: {},
	mutations: {
		ADD_EVENT(state, event) {
			state.events.push(event);
		},
		SET_EVENT(state, event) {
			state.event = event;
		},
		SET_EVENTS(state, events) {
			state.events = events;
		},
	},
	actions: {
		createEvent({ commit }, event) {
			return EventService.postEvent(event).then(() => {
				commit('ADD_EVENT', event);
			});
		},
		fetchEvent({ commit }, id) {
			return EventService.getEvent(id)
				.then((response) => {
					commit('SET_EVENT', response.data);
				})
				.catch((error) => {
					console.log(error.response);
				});
		},
		fetchEvents({ commit }) {
			EventService.getEvents()
				.then((response) => {
					commit('SET_EVENTS', response.data);
				})
				.catch((error) => {
					console.log('This is a error message : ' + error.response);
				});
		},
	},
});

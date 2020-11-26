import ContainerService from '@/services/container.service';
import ContainerCollection from '@/store/collections/containerCollection';

export default {
    namespaced: true,
    state: {
        currentContainerId: null,
        containers: new ContainerCollection(),
    },
    mutations: {
        currentContainerId(state, currentContainerId) {
            state.currentContainerId = currentContainerId;
        },
        containers(state, containersData) {
            state.containers.push(containersData);
        },
    },
    actions: {
        getUserContainerList({ commit }) {
            return ContainerService.getUserContainerList()
                .then((res) => {
                    commit('containers', res.content);
                });
        },
        getContainer({ commit }, id) {
            return ContainerService.getContainer(id)
                .then((res) => {
                    commit('containers', [res]);
                })
                .catch((error) => {
                    throw error;
                });
        },
        openContainer({ commit, dispatch }, id) {
            commit('currentContainerId', id);
            return dispatch('getContainer', id);
        }
    },
    getters: {
        containers(state) {
            return state.containers.all();
        },
        container(state) {
            const findContainer = state.containers.find(state.currentContainerId);
            if (findContainer) {
                return findContainer.data;
            }
        },
    },
};

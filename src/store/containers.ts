import ContainerService from '@/services/container.service';
import ContainerCollection from '@/store/collections/containerCollection';
import {Module} from "vuex";

import { container } from "@/store/interfaces/interfaces";

const containersModule: Module<any, any> = {
    namespaced: true,
    state: {
        currentContainerId: null,
        containers: new ContainerCollection(),
    },
    mutations: {
        currentContainerId(state, currentContainerId: string) {
            state.currentContainerId = currentContainerId;
        },
        pushContainers(state, containersData: Array<container>) {
            state.containers.push(containersData);
        },
        createContainers(state, containersData: Array<container>) {
            state.containers.set(containersData);
        },
    },
    actions: {
        getUserContainerList({ commit }): Promise<Array<container>> {
            return ContainerService.getUserContainerList()
                .then((res) => {
                    commit('createContainers', res.content);
                    return res;
                });
        },
        getContainer({ commit }, id: string): Promise<container | null> {
            return ContainerService.getContainer(id)
                .then((res) => {
                    commit('pushContainers', [res]);
                    return res;
                })
                .catch((error) => {
                    throw error;
                });
        },
        openContainer({ commit, dispatch }, id: string): Promise<any> {
            commit('currentContainerId', id);
            return dispatch('getContainer', id);
        }
    },
    getters: {
        containers(state): Array<container> {
            return state.containers.all();
        },
        container(state): container | null {
            const findContainer = state.containers.find(state.currentContainerId);
            if (findContainer) {
                return findContainer.data;
            }
            return null;
        },
    },
};

export default containersModule;

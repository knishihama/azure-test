import { RootState, Bountie } from "~/types";
import { MutationTree, ActionTree } from "vuex";

export const state = (): RootState => ({
    bounties: []
})

export const mutations: MutationTree<RootState> = {
  setBountie(state: RootState, bounties: Bountie[]): void {
    state.bounties = bounties
  }
}

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit({ commit }, { app }) {
    const bounties: Bountie[] = await app.$axios.$get(
      "/test/stub_bounties.json"
    )
    commit("setBountie", bounties)
  }
}

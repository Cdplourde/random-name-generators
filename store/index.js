export const state = () => ({
  sidebarToggled: false
})

export const mutations = {
  toggleSidebar (state) {
    state.sidebarToggled = !state.sidebarToggled
  }
}

export const actions = {
  toggleSidebar (context) {
    context.commit('toggleSidebar')
  }
}
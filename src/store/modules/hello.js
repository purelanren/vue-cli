const state = {
  status: 'no',
  time: ''
}

const mutations = {
  visiteHello (state) {
    state.status = 'yes'
    state.time = new Date().toLocaleDateString()
  }
}

export default {
  state,
  mutations
}

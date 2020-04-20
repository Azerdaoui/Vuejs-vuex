import axios from 'axios'

export const fetchNumbers = ({ commit }) => {
    axios.get('url-here').then((response) => {
        commit('addRandomNumber', response.data.result)
    })
}
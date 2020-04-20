import axios from 'axios'

export default fetchNumbers = ({commit }) => {
    axios.get('url-here').then((response) => {
        commit('addRandomNumber', response.data.result)
    })
}
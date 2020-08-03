import axios from 'react-native-axios'

export default axios.create({
    baseURL: 'https://taco-food-api.herokuapp.com/api/v1/'
})
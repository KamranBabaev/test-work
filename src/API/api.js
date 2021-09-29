import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://61530a7cc465200017d1a943.mockapi.io/results/',
})


export const resultsAuction = {
    async getResults() {
        return await instance.get('bests')
    }
}
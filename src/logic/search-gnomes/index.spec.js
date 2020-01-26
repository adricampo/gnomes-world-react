require('dotenv').config()
const { expect } = require('chai')
const searchGnomes = require('../index')

describe('logic search-gnomes ', () => {


    it('if no query is given and no criteria selected, it should give all the results available in the array, searching in all the item parameters', async () => {
        const query = ''
        const criteria = 'none'

        try {
            await searchGnomes(query, criteria)

        } catch (error) {
        
        }

    })

})

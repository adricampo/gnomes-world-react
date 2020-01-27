require('dotenv').config()
const { expect } = require('chai')
const searchGnomes = require('.')

describe('logic search-gnomes ', () => {
    it('if no query is given and no criteria selected, it should give all the results available in the array, searching in all the item parameters', async () => {
        const query = ''
        const criteria = 'none'

        try {
            await searchGnomes(query, criteria)

        } catch (error) {
            expect(error).to.be.an.instanceOf(Error)
            expect(error.message).to.equal('query is empty or blank')
        }
    })

    it('if some criteria is given, it will show results only searching on that criteria from all the gnomes list', async () => {
        const query = 'tob'
        const criteria = 'name'

        try {
            await searchGnomes(query, criteria)

        } catch (error) {
            expect(error).to.be.an.instanceOf(Error)
            expect(error.message).to.equal('No results..')
        }
    })

})

import retrieveGnome from './index'
require('dotenv').config()
const { expect } = require('chai')

describe('logic - retrieve gnome',  () => {
    it('should succeed on correct data', async () => { 
        const id = 1
        const gnome = await retrieveGnome(id) 

        expect(gnome.id).to.equal(1)
        expect(gnome.id).to.be.a('number')

    })

    it('should fail if the id of the item is not found', async () => {
        const id = 2312345
        
        try {
            await retrieveGnome(id)

        } catch (error) {
            expect(error.message).to.equal('Gnome info not found')
        }

    })

})

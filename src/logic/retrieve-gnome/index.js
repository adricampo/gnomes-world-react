const {dataResponse} = require('../../utils/fetch')
const { NotFoundError } = require('../../utils/errors')
const validate = require('../../utils/validate')

export default function (id) { 
    validate.number(id)
    
    return (async () => { 
        const {Brastlewark} = await dataResponse()
        if (!Brastlewark) throw new NotFoundError('Gnome info not found')

        return Brastlewark[id]
    })()
}   
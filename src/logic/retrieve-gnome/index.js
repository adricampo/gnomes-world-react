const {dataResponse} = require('../../utils/fetch')

export default function (id) { 
    return (async () => { 
        const {Brastlewark} = await dataResponse()
        return Brastlewark[id]
    })()
}   
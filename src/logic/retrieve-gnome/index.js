const {dataResponse} = require('../../utils/fetch')

export default function (id) {  // test
    return (async () => { 
        const {Brastlewark} = await dataResponse()
        return Brastlewark[id]
    })()
}   
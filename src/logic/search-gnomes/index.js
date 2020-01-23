const {dataResponse} = require('../../utils/fetch')

export default function (query) {
    dataResponse()
        .then (({Brastlewark}) => {
            return Brastlewark.filter()
        })
}

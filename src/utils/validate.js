const { ContentError } = require('./errors')
const { isTypeOf, isInstanceOf, isEmail } = require('./validators')

const validate = {
    typeOf(type, target) {
        if (!isTypeOf(target, type)) throw new TypeError(`${target} is not a ${type}`)
    },

    string(target) {
        this.typeOf('string', target)
    },

    function(target) {
        this.typeOf('function', target)
    },

    boolean(target) {
        this.typeOf('boolean', target)
    },

    instanceOf(type, target) {
        if (!isInstanceOf(target, type)) throw TypeError(`${target} is not a ${type.name}`)
    },

    array(target) {
        this.instanceOf(Array, target)
    },

    // personal project data

    query(target) {
        this.typeOf('query', target)
    },
 
    criteria(target) {
        this.typeOf('criteria', target)
    }

}

validate.string.notVoid = function (name, target) {
    if (!target.trim().length) throw new ContentError(`${name} is empty or blank`)
}

module.exports = validate
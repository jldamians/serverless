class InvalidNumberFormatError extends Error{
    constructor(message) {
        super(message);
        this.name = 'InvalidNumberFormatError';
    }

    static throwBecauseOf(ruc) {
        return new this(`El número de ruc ${ruc} es incorrecto`);
    }
}

module.exports = InvalidNumberFormatError;
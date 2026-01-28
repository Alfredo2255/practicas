// Utilidades de validación
const ValidationUtils = {
    isEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    },

    isPhone(phone) {
        const regex = /^\d{10}$/;
        return regex.test(phone);
    },

    isEmpty(value) {
        return !value || value.trim() === '';
    },

    validate(data) {
        const errors = [];
        
        if (this.isEmpty(data.name)) {
            errors.push('El nombre es requerido');
        }
        
        if (!this.isEmail(data.email)) {
            errors.push('El email no es válido');
        }
        
        return {
            isValid: errors.length === 0,
            errors: errors
        };
    }
};

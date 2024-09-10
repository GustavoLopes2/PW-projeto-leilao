export const validatePassword = (password) => {
    const errors = [];
    const minCaractere = password.length >= 6;
    const letraMaiuscula = /[A-Z]/.test(password);
    const letraMinuscula = /[a-z]/.test(password);
    const temNumero = /\d/.test(password);
    const caractereEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (!minCaractere) {
        errors.push("A senha deve ter no mínimo 6 caracteres.");
    }
    if (!letraMaiuscula) {
        errors.push("A senha deve conter pelo menos 1 letra maiúscula.");
    }
    if (!letraMinuscula) {
        errors.push("A senha deve conter pelo menos 1 letra minúscula.");
    }
    if (!temNumero) {
        errors.push("A senha deve conter pelo menos 1 número.");
    }
    if (!caractereEspecial) {
        errors.push("A senha deve conter pelo menos 1 caractere especial.");
    }

    return errors;
};

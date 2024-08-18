export const validatePassword = (password) => {
    const minCaractere = password.length >= 6;
    const letraMaiuscula = /[A-Z]/.test(password);
    const letraMinuscula = /[a-z]/.test(password);
    const temNumero = /\d/.test(password);
    const caractereEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (!minCaractere) {
        return "A senha deve ter no mínimo 6 caracteres.";
    }
    if (!letraMaiuscula) {
        return "A senha deve conter pelo menos 1 letra maiúscula.";
    }
    if (!letraMinuscula) {
        return "A senha deve conter pelo menos 1 letra minúscula.";
    }
    if (!temNumero) {
        return "A senha deve conter pelo menos 1 número.";
    }
    if (!caractereEspecial) {
        return "A senha deve conter pelo menos 1 caractere especial.";
    }
    return "";
};

/**
 * Variable para strings de Accounts Templates
 * @type {{choosePassword: string, clickAgree: string, configure: string, dontHaveAnAccount: string, forgotPassword: string, ifYouAlreadyHaveAnAccount: string, sign: string, signIn: string, signin: string, signOut: string, signUp: string, signupCode: string, signUpWithYourEmailAddress: string, terms: string}}
 */
var es = {
    choosePassword: "Elegir contraseña",
    clickAgree: "Al hacer clic en Registrar apruebas la",
    configure: "Configurar",
    dontHaveAnAccount: "¿No tienes una cuenta?",
    forgotPassword: "¿Olvidaste tu contraseña?",
    ifYouAlreadyHaveAnAccount: "Si ya tiene una cuenta",
    sign: "Ingresar",
    signIn: "Iniciar Sesión",
    signin: "iniciar sesión",
    signOut: "Cerrar Sesión",
    signUp: "Regístrate",
    signupCode: "Código de registro",
    signUpWithYourEmailAddress: "Registrar con tu correo electrónico",
    terms: "Términos de uso"
};

// Mapeo de los nuevos strings para español
T9n.map("es", es);

T9n.map('es', {
    error: {
        accounts: {
            'Login forbidden': 'Correo electrónico o Contraseña incorrectos'
        }
    }
});

// Configuración del lenguaje por defecto
T9n.setLanguage(getUserLanguage());
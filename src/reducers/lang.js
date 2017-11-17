/**
 * this user reducer is a function which return to us a javascript object of our users
 * */
export default function () {
    return [
        {
            "id": 0,
            "lang": "English",
            "code" : "en",
            "page": {
                "menu": {
                    "login": "Login",
                    "signup": "Signup for free",
                    "languages": "Languages",
                    "forget_password": "Forget Password"
                },
                "login": {
                    "welcome": "Welcome back!",
                    "placeholder_username": "Username (Your Email)",
                    "placeholder_password": "Choose Your Password",
                    "login_button": "Login",
                    "forget_password": "Forget Password?",
                    "signup_button": "Signup for free"
                },
                "signup": {
                    "welcome": "Signup for free!",
                    "placeholder_fullname": "Full Name",
                    "placeholder_username": "Username (Your Email)",
                    "placeholder_password": "Choose Your Password",
                    "signup_button": "Create account"
                },
                "forget_password": {
                    "welcome": "Forget Password?",
                    "placeholder_username": "Username (Your Email)",
                    "reset_password_button": "Reset Password"
                },

            }
        },
        {
            "id": 1,
            "lang": "Deutsch",
            "code": "de",
            "page": {
                "menu": {
                    "login": "Anmelden",
                    "signup": "Kostenlos registrieren",
                    "languages": "Sprache",
                    "forget_password": "Kennwort vergessen"
                },
                "login": {
                    "welcome": "Willkommen zurück!",
                    "placeholder_username": "Benutzername (Ihre E-Mail)",
                    "placeholder_password": "Kennwort auswählen",
                    "login_button": "Anmelden",
                    "forget_password": "Kennwort vergessen ?",
                    "signup_button": "Kostenlos registrieren"
                },
                "signup": {
                    "welcome": "Kostenlos registrieren!",
                    "placeholder_fullname": "Vorname & Nachname",
                    "placeholder_username": "Benutzername (Ihre E-Mail)",
                    "placeholder_password": "Kennwort auswählen",
                    "signup_button": "Account erstellen"
                },
                "forget_password": {
                    "welcome": "Kennwort zurücksetzen?",
                    "placeholder_username": "Email",
                    "reset_password_button": "Kennwort zurücksetzen"
                },

            }
        }
    ]






}
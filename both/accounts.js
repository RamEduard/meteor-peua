AccountsTemplates.configure({
    // Behaviour
    confirmPassword: true,
    enablePasswordChange: true,
    forbidClientAccountCreation: false,
    overrideLoginErrors: true,
    sendVerificationEmail: false,

    // Appearance
    showForgotPasswordLink: true,
    showLabels: true,
    showPlaceholders: false,

    // Client-side Validation
    continuousValidation: false,
    negativeFeedback: true,
    negativeValidation: true,
    positiveValidation: true,
    positiveFeedback: true,
    showValidating: true,

    // Redirects
    homeRoutePath: '/',
    redirectTimeout: 2000
});

AccountsTemplates.configureRoute("forgotPwd");
AccountsTemplates.configureRoute("resetPwd");

/**
 * After sign callback
 */
function afterSign() {
    let userId = Meteor.userId(),
        routeName = (Roles.userIsInRole(userId, ['admin']))
            ? 'dashboard'
            : 'home';

    Router.go(routeName);
}

AccountsTemplates.configureRoute("signIn", {
    name: 'signIn',
    path: '/sign-in',
    redirect: afterSign
});
AccountsTemplates.configureRoute("signUp", {
    name: 'signUp',
    path: '/sign-up',
    redirect: afterSign
});
AccountsTemplates.configureRoute("verifyEmail");

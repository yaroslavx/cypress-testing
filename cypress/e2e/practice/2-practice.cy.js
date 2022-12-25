/// <reference types="cypress" />

// cy.intercept for mocking
// for data in mock use fixture

describe('visit my app', () => {
  it('my app', () => {
    cy.visit('https://post-it-app-dun.vercel.app/');
  });

  it('sign in', () => {
    cy.get('.relative').click();
  });

  it('login in google', () => {
    it('Login through Google', () => {
      const username = Cypress.env('');
      const password = Cypress.env('');
      const loginUrl = Cypress.env('https://post-it-app-dun.vercel.app/');
      const cookieName = Cypress.env('cookieName');
      const socialLoginOptions = {
        username: username,
        password: password,
        loginUrl: loginUrl,
        headless: true,
        logs: false,
        loginSelector: '[href="/auth/auth0/google-oauth2"]',
        postLoginSelector: '.account-panel',
      };

      return cy
        .task('GoogleSocialLogin', socialLoginOptions)
        .then(({ cookies }) => {
          cy.clearCookies();

          const cookie = cookies
            .filter((cookie) => cookie.name === cookieName)
            .pop();
          if (cookie) {
            cy.setCookie(cookie.name, cookie.value, {
              domain: cookie.domain,
              expiry: cookie.expires,
              httpOnly: cookie.httpOnly,
              path: cookie.path,
              secure: cookie.secure,
            });

            Cypress.Cookies.defaults({
              preserve: cookieName,
            });
          }
        });
    });
  });
});

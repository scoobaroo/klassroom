angular.module('klassroom.omniauth', ['satellizer'])
  .config(function($authProvider) {
    // Optional: For client-side use (Implicit Grant), set responseType to 'token'
    $authProvider.facebook({
      clientId: '866789200132698',
      clientSecret: 'b8bd1618fae9da477f1e48b1be75bd49', // optional
      responseType: 'token'
    });
    $authProvider.oauth2({
      name: 'foursquare',
      url: '/auth/foursquare',
      clientId: 'Foursquare Client ID',
      redirectUri: window.location.origin,
      authorizationEndpoint: 'https://foursquare.com/oauth2/authenticate',
    });
    $authProvider.httpInterceptor = function() { return true; },
    $authProvider.withCredentials = true;
    $authProvider.tokenRoot = null;
    $authProvider.baseUrl = '/';
    $authProvider.loginUrl = '/auth/login';
    $authProvider.signupUrl = '/auth/signup';
    $authProvider.unlinkUrl = '/auth/unlink/';
    $authProvider.tokenName = 'token';
    $authProvider.tokenPrefix = 'satellizer';
    $authProvider.authHeader = 'Authorization';
    $authProvider.authToken = 'Bearer';
    $authProvider.storageType = 'localStorage';

    // Facebook
    $authProvider.facebook({
      name: 'facebook',
      url: '/auth/facebook',
      authorizationEndpoint: 'https://www.facebook.com/v2.5/dialog/oauth',
      redirectUri: window.location.origin + '/',
      requiredUrlParams: ['display', 'scope'],
      scope: ['email'],
      scopeDelimiter: ',',
      display: 'popup',
      type: '2.0',
      popupOptions: { width: 580, height: 400 }
    });

    $authProvider.oauth2({
    name: null,
    url: null,
    clientId: null,
    redirectUri: null,
    authorizationEndpoint: null,
    defaultUrlParams: ['response_type', 'client_id', 'redirect_uri'],
    requiredUrlParams: null,
    optionalUrlParams: null,
    scope: null,
    scopePrefix: null,
    scopeDelimiter: null,
    state: null,
    type: null,
    popupOptions: null,
    responseType: 'code',
    responseParams: {
      code: 'code',
      clientId: 'clientId',
      redirectUri: 'redirectUri'
    }
  });
  });

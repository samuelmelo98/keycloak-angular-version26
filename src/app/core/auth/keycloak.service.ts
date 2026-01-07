import Keycloak from 'keycloak-js';

export class KeycloakService {

  private static keycloak: Keycloak;


  static init(): Promise<boolean> {
    if (!this.keycloak) {
      this.keycloak = new Keycloak({
        url: 'https://auth.stringtecnologiadf.org',
        realm: 'stringtecnologia',
        clientId: 'frontend-spa'
      });
    }

    return this.keycloak.init({
      onLoad: 'check-sso',
      pkceMethod: 'S256',
      silentCheckSsoRedirectUri:
        window.location.origin + '/assets/silent-check-sso.html',
      checkLoginIframe: false
    });
  }

  static login() {
    if (!this.keycloak) {
      console.warn('⚠️ Keycloak ainda não inicializado');
      return;
    }
    this.keycloak.login();
  }

  static logout() {
    this.keycloak?.logout();
  }

  static isLoggedIn(): boolean {
    return !!this.keycloak?.authenticated;
  }

  static getToken(): string | undefined {
    return this.keycloak?.token;
  }

    // 👉 NOVO: dados do usuário
    static getUserProfile() {
      if (!this.keycloak?.tokenParsed) {
        return null;
      }

      const token: any = this.keycloak.tokenParsed;

      return {
        username: token.preferred_username,
        email: token.email,
        name: token.name
      };
    }
}

class StorageUtil {
  setToken(bearerToken: string) {
    if (!process.browser) {
      return;
    }

    localStorage.setItem('BEARER_TOKEN', bearerToken);
    console.log(localStorage);
  }
  getToken(): string | null {
    if (!process.browser) {
      return null;
    }

    const bearerToken = localStorage.getItem('BEARER_TOKEN');
    return bearerToken ? bearerToken : null;
  }

  deleteTokens() {
    if (!process.browser) {
      return;
    }

    localStorage.removeItem('BEARER_TOKEN');
  }
}

export default new StorageUtil();

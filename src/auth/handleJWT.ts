import { claim, responseAuthentication } from "./auth.model";

const keyToken = "token";
const keyExpiration = "token-expiration"

export function saveTokenLocalStorage(authentication: responseAuthentication){
    localStorage.setItem(keyToken, authentication.token);
    localStorage.setItem(keyExpiration, authentication.expiration.toString());
}

export function getClaims(): claim[]{
    const token = localStorage.getItem(keyToken);

    if (!token){
        return [];
    }

    const expiration = localStorage.getItem(keyExpiration)!;
    const expirationDate = new Date(expiration);

    if (expirationDate <= new Date()){
        logout();
        return [];
    }

    // window.btoa

    const dataToken = JSON.parse(atob(token.split(".")[1]));
    const response: claim[] = [];
    for (const property in dataToken){
        response.push({name: property, value: dataToken[property]});
    }

    return response;
}

export function logout(){
    localStorage.removeItem(keyToken);
    localStorage.removeItem(keyExpiration);
}

export function getToken(){
    return localStorage.getItem(keyToken);
}
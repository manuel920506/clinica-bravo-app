const apiURL = process.env.REACT_APP_API_URL;
console.log('sto passando l\'url: ', apiURL);
export const urlTopics = `${apiURL}/Blog/list`
export const urlAccounts = `${apiURL}/accounts`
import WebProvider from './web-provider';

export const cocktailProvider = new WebProvider({
    baseUrl: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
});

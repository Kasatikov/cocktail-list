import CocktailOverviewStore from '../_domain/stores/cocktail-overview-store';
import { CocktailTypes } from '../common/route-types';
import { cocktailProvider } from '../_domain/providers/cocktail-provider';

export const cocktailOverviewStoreFactory = (cocktailType: typeof CocktailTypes) =>
    new CocktailOverviewStore(cocktailType, cocktailProvider);

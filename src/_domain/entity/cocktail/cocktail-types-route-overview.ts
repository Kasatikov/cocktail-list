import { CocktailTypes } from '../../../common/route-types';
import { AppRouteDto } from '../../../common/dynamic-route';
import MargaritaPage from '../../../pages/margarita-page';
import MojitoPage from '../../../pages/mojito-page';
import AOnePage from '../../../pages/a-one-page';
import KirPage from '../../../pages/kir-page';

export const COCKTAIL_TYPES_ROUTE_OVERVIEW_MAP: AppRouteDto[] = [
    {
        path: CocktailTypes.Margarita,
        component: MargaritaPage,
    },
    {
        path: CocktailTypes.Mojito,
        component: MojitoPage,
    },
    {
        path: CocktailTypes.AOne,
        component: AOnePage,
    },
    {
        path: CocktailTypes.Kir,
        component: KirPage,
    },
];

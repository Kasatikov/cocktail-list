import { CocktailTypes } from '../common/route-types';
import React from 'react';
import CocktailPage from '../components/cocktail-page/cocktail-page';
import { cocktailOverviewStoreFactory } from '../_app_init/init-stores';

const MojitoPage: React.FC = () => {
    return <CocktailPage store={cocktailOverviewStoreFactory(CocktailTypes.Mojito)} />;
};

export default MojitoPage;

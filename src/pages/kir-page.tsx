import { CocktailTypes } from '../common/route-types';
import React from 'react';
import CocktailPage from '../components/cocktail-page/cocktail-page';
import { observer } from 'mobx-react-lite';
import { cocktailOverviewStoreFactory } from '../_app_init/init-stores';

const KirPage: React.FC = () => {
    return <CocktailPage store={cocktailOverviewStoreFactory(CocktailTypes.Kir)} />;
};

export default observer(KirPage);

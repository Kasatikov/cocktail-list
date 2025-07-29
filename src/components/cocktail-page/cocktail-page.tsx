import React, { useEffect } from 'react';
import './index.scss';
import { observer } from 'mobx-react-lite';
import CocktailOverviewStore from '../../_domain/stores/cocktail-overview-store';
import { isEmpty } from '../../_domain/entity/utils/is-empty';

interface CocktailPageProps {
    store: CocktailOverviewStore;
}

const CocktailPage: React.FC<CocktailPageProps> = ({ store }) => {
    useEffect(() => {
        store.loadData();

        return store.reset;
    }, []);

    const item = store.item;
    const isLoading = store.queryState === 'loading';
    const isError = store.queryState === 'error';

    if (isLoading) {
        return `Коктейль ${store.cocktailType} загружается...`;
    }

    if (isError) {
        return `Произошла ошибка при загрузке коктейля ${store.cocktailType}. Попробуйте загрузить страницу позже`;
    }

    return (
        <div className='page'>
            {item?.drinks.map((drink) => {
                return (
                    <div className='content'>
                        <div className='main-info-wrapper'>
                            <div className='main-info'>
                                <div className='name'>{drink.strDrink}</div>
                                <div className='category'>{drink.strCategory}</div>
                                <div className='alko'>{drink.strAlcoholic}</div>
                                <div className='glass'>{drink.strGlass}</div>

                                <div className='instructions-wrapper'>
                                    Instructions:
                                    <div className='instructions'>{drink.strInstructions}</div>
                                </div>

                                <div className='ingredients-wrapper'>
                                    List of ingredients:
                                    {drink.ingredientsAndMeasures.map((elem, index) => {
                                        const needToDisplay = Boolean(
                                            isEmpty(elem.measure) && isEmpty(elem.ingredient),
                                        );
                                        return needToDisplay ? (
                                            <div className='list' key={index}>
                                                <div className='measure'>{elem.measure}</div>
                                                <div className='ingredient'>{elem.ingredient}</div>
                                            </div>
                                        ) : null;
                                    })}
                                </div>
                            </div>
                            <div className='cocktail-img'>
                                <img
                                    loading='lazy'
                                    src={drink.strDrinkThumb}
                                    alt='cocktail image'
                                />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default observer(CocktailPage);

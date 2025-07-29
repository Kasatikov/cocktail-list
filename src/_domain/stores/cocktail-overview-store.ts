import { OverviewBaseStore } from './overview-base-store';
import { CocktailTypes } from '../../common/route-types';
import { action, computed, makeObservable } from 'mobx';
import WebProvider from '../providers/web-provider';
import { CocktailDto } from '../entity/cocktail/types';

export default class CocktailOverviewStore extends OverviewBaseStore<CocktailDto> {
    private readonly _cocktailProvider: WebProvider;

    private readonly _cocktailType: typeof CocktailTypes;

    constructor(cocktailType: typeof CocktailTypes, cocktailProvider: WebProvider) {
        super();

        this._cocktailProvider = cocktailProvider;
        this._cocktailType = cocktailType;

        makeObservable(this);
    }

    @action
    public loadData = async (): Promise<void> => {
        this.setQueryState('loading');

        try {
            const data = await this._cocktailProvider.getDataAsJson<CocktailDto>(
                this._cocktailType,
            );
            this.setItem(data);
            this.mapIngredients();
            this.setQueryState('success');
        } catch (error) {
            this.setError(error);
            this.setQueryState('error');
        }
    };

    @action
    private mapIngredients = (): void => {
        const item = this._item;

        item?.drinks.map((drink) => {
            drink.ingredientsAndMeasures = [];
            for (let i = 1; i <= 15; i++) {
                drink.ingredientsAndMeasures.push({
                    ingredient: drink[`strIngredient${i}`],
                    measure: drink[`strMeasure${i}`],
                });
            }
        });
    };

    @computed
    public get cocktailType(): typeof CocktailTypes {
        return this._cocktailType;
    }
}

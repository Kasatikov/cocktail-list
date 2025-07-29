import { OverviewBaseStore } from './overview-base-store';
import { CocktailTypes } from '../../common/route-types';
import { action, computed, makeObservable } from 'mobx';
import WebProvider from '../providers/web-provider';

interface IngredientsAndMeasuresDto {
    ingredient: string | null;
    measure: string | null;
}

interface CocktailDto {
    drinks: [
        {
            strDrink: string;
            strCategory: string;
            strAlcoholic: string;
            strGlass: string;
            strInstructions: string;
            strDrinkThumb: string;
            strIngredient1: string | null;
            strIngredient2: string | null;
            strIngredient3: string | null;
            strIngredient4: string | null;
            strIngredient5: string | null;
            strIngredient6: string | null;
            strIngredient7: string | null;
            strIngredient8: string | null;
            strIngredient9: string | null;
            strIngredient10: string | null;
            strIngredient11: string | null;
            strIngredient12: string | null;
            strIngredient13: string | null;
            strIngredient14: string | null;
            strIngredient15: string | null;
            strMeasure1: string | null;
            strMeasure2: string | null;
            strMeasure3: string | null;
            strMeasure4: string | null;
            strMeasure5: string | null;
            strMeasure6: string | null;
            strMeasure7: string | null;
            strMeasure8: string | null;
            strMeasure9: string | null;
            strMeasure10: string | null;
            strMeasure11: string | null;
            strMeasure12: string | null;
            strMeasure13: string | null;
            strMeasure14: string | null;
            strMeasure15: string | null;
            ingredientsAndMeasures: IngredientsAndMeasuresDto[];
        },
    ];
}

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

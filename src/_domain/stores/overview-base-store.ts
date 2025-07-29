import { action, computed, makeObservable, observable } from 'mobx';

type StoreQueryState = 'none' | 'loading' | 'success' | 'error';

export class OverviewBaseStore<T> {
    protected constructor() {
        makeObservable(this);
    }

    @observable
    private _storeQueryState: StoreQueryState = 'none';

    @observable
    private _error: Error | undefined;

    @observable
    protected _item: T | undefined;

    @action
    public reset = (): void => {
        this._storeQueryState = 'none';
        this._error = undefined;
        this._item = undefined;
    };

    @action
    protected setItem = (item: T): void => {
        this._item = item;
    };

    @action
    protected setError = (error: Error): void => {
        this._error = error;

        console.log(error);
    };

    @action
    protected setQueryState = (storeQueryState: StoreQueryState): void => {
        this._storeQueryState = storeQueryState;
    };

    @computed
    public get item(): T | undefined {
        return this._item;
    }

    @computed
    public get queryState(): StoreQueryState {
        return this._storeQueryState;
    }
}

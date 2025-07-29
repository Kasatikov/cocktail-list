import { checkResponse } from './utils/check-response';

interface WebProviderProps {
    baseUrl: string;
}

export default class WebProvider {
    private readonly baseUrl: string;

    constructor(props: WebProviderProps) {
        this.baseUrl = props.baseUrl;
    }

    public getDataAsJson = async <R>(query: string): Promise<R> => {
        const response = await fetch(`${this.baseUrl}${query}`);

        await checkResponse(response);

        return (await response.json()) as R;
    };
}

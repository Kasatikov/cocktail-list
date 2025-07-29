export const checkResponse = async (response: Response) => {
    if (!response) {
        throw new Error('Ошибка выполнения запроса');
    }

    if (response.ok) {
        return;
    }

    const errorInfo = await response.json();

    if (!errorInfo) {
        throw new Error('Что-то пошло не так...');
    }
};

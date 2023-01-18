let baseUrl = 'http://localhost:3006/items'

export function fetchFoods() {
    return async(dispatch) => {
        try {
            let data = await fetch(baseUrl)
            let convert = await data.json()
            dispatch({
                type: 'foods/fetchFoods',
                payload: convert
            })
        } catch (err) {
            console.log(err);
        }
    }
}
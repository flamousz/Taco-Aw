import { useState, useEffect } from 'react'

export default function useFetch(url) {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => console.log(err))
            .finally(() => setIsLoading(false))
    }, [])

    return [data, isLoading]
}

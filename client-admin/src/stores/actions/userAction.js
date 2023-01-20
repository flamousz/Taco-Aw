import { toast } from "react-toastify";

const baseUrl = "http://localhost:3009/users";


export function postUser(body) {
    return async () => {
        try {
            let data = await fetch(`${baseUrl}/register`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body)
            })
            let convert = await data.json()
            if (!data.ok) {
                throw convert
            }
            return convert.message

        } catch (err) {
            throw err
            
        }
    }
}
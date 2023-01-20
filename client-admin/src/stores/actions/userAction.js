import { toast } from "react-toastify";

const baseUrl = "http://localhost:3009/users";


export function postUser(body) {
    return async () => {
        try {
            console.log(body,'<< body dari action');
            let data = await fetch(`${baseUrl}/register`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body)
            })
            console.log(data, '<< ini data');
            let convert = await data.json()
            return convert.message

        } catch (err) {
            console.log(err);
            toast.error(`${err.message}`)
            
        }
    }
}
import { toast } from "react-toastify";

const baseUrl = "http://localhost:3009/users";
// const baseUrl = "https://taco-aw.foxhub.space/users";

export function login(body) {
    return async () => {
        try {
            const data = await fetch(`${baseUrl}/login`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body)
            })

            const convert = await data.json()
            if (!data.ok) {
                throw convert
            }
            localStorage.setItem("access_token", convert.access_token)
            localStorage.setItem("email", convert.email)
            localStorage.setItem("role", convert.role)
            return  `welcome to the store ${body.email}`
        } catch (err) {
            
            throw err
        }
    }
}

export function postUser(body) {
    return async () => {
        try {
            const data = await fetch(`${baseUrl}/register`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body)
            })
            const convert = await data.json()
            if (!data.ok) {
                throw convert
            }
            return convert.message

        } catch (err) {
            throw err
            
        }
    }
}

import { useEffect, useState } from "react"
import Card from "./Card"
import { User } from "./types/User"

export default function App() {
    const [users, setUsers] = useState<User[] | null>(null)

    useEffect(() => {
        async function getUsers() {
            const res = await fetch("https://api.github.com/users")
            const data = await res.json()
            setUsers(data)
        }
        getUsers()
    }, [])

    return (
        <div className="App">
            <div>
                {users?.map((user) => (
                    <p>{user.html_url}</p>
                ))}
            </div>
            <pre>{JSON.stringify(users, null, 2)}</pre>
        </div>
    )
}

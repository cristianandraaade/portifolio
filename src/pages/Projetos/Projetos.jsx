import { useEffect, useState } from "react";


function Projetos() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        const searchRepository = async () => {
            const response = await fetch(`https://api.github.com/users/cristianandraaade/repos`)
            const data = await response.json()
            console.log(data);
            setRepositories(data);
        }
        searchRepository();
    }, [])
    return (
        <></>
    )
}
export default Projetos;

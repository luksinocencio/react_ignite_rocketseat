import {useEffect, useState} from "react";

function avisarAPI() {
    console.log('Lista Salva')
}

export function App() {
    const [list, setList] = useState<string[]>([])
    /**
     * não é necessário criar um novo estado para a lista filtrada, pois podemos fazer a filtragem diretamente em uma variável assim evitamos varias renderizações desnecessárias
     * */
        // const [filteredList, setFilteredList] = useState<string[]>([])
    const [filter, setFilter] = useState<string>('')

    useEffect(() => {
        avisarAPI()
    }, [list])

    useEffect(() => {
        fetch('https://api.github.com/users/luksinocencio/repos')
            .then(response => response.json())
            .then(data => {
                setList(data.map((repo: any) => repo.full_name))
            })
    }, []);

    // useEffect(() => {
    //     // setFilteredList(list.filter(item => item.includes(filter)))
    // }, [filter]);

    const filteredList = list.filter(item => item.includes(filter))

    function addToList() {
        setList((state) => [...state, 'Novo Item'])
    }

    return (
        <div>
            <input type="text" onChange={(e) => setFilter(e.target.value)} value={filter}/>
            {/*<ul>*/}
            {/*    {list.map((item, index) => <li>{item}</li>)}*/}
            {/*</ul>*/}

            <ul>
                {filteredList.map((item, index) => <li>{item}</li>)}
            </ul>

            <button onClick={addToList}>Adicionar Item</button>
        </div>
    )
}



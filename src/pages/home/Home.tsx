import Carrosel from "../../components/carrosel/Carrosel"
import ListarProdutos from "../../components/produtos/listarproduto/ListarProduto"


function Home() {
    return (
        <>
            <div>
                <Carrosel />
            </div>
            <ListarProdutos />
        </>
    )
}

export default Home
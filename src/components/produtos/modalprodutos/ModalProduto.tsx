import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './ModalProduto.css';
import FormularioProduto from '../formproduto/FormProduto';

function ModalProduto() {
    return (
        <>
            <Popup
                trigger={
                    <button 
                        className='border rounded px-4 py-2  border-white hover:bg-white hover:text-indigo-800'>
                        Novo Produto
                    </button>
                }
                modal
            >
                <FormularioProduto />
            </Popup>
        </>
    );
}

export default ModalProduto;
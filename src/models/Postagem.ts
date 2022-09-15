import Tema from './Tema'
import User from './User'

interface Postagem{
    id: number;
    titulo: string;
    texto: string;
    imagem: string;
    data: string;
    tema?: Tema| null
    usuario?: User| null

}

export default Postagem;
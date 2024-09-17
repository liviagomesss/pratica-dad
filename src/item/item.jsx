import styles from "./item.module.css";
import icPeso from "../assets/ic_peso.svg";




export default function item({imagem, nomeItem, valor}){
    return (
        <div className={styles.produto}>
            <img className={styles.imgProduto} src={imagem} alt="imagem do Produto" />
            <div className={styles.informacoes}>
                <h3>{nomeItem}</h3>
                <p className={styles.preco}>1Kg/Preço</p>
                <p className={styles.valor}>{valor}</p>
            </div>
            <img  src= {icPeso} alt="icon de peso" className={styles.imgPeso}/>
            

        </div>
    )
}
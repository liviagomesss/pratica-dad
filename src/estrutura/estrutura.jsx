import styles from "./estrutura.module.css";
import icPeso from "../assets/ic_peso.svg";
import Item from "../item/item.jsx"
import fotoCarne1 from "../assets/meat-its-raw-state-isolated-transparent-background_191095-20207-removebg-preview.png";
import fotoCarne2 from "../assets/meat-4287464_1920.png"
import fotoCarne3 from "../assets/146a837cb019fec4bdc53a7eeecc5b0d_tn.png";





export default function item({nome,tipo, color}){
    return (
        <div className={styles.tudo}>
            <h1>{nome}</h1>
            <div className={styles.Categoria}>
                <p>{tipo}</p>
            </div>

            <div className={styles.itens}>
                <Item nomeItem={"item 1"} imagem={fotoCarne1} valor={"R$000.000"}/>
                <Item nomeItem={"item 2"} imagem={fotoCarne2} valor={"R$000.000"}/>
                <Item nomeItem={"item 2"} imagem={fotoCarne3} valor={"R$000.000"}/>
             
            </div>
            

            

        </div>
    )
}
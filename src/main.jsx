import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import fotoCarne from "./assets/meat-its-raw-state-isolated-transparent-background_191095-20207-removebg-preview.png"
import Item from "./item/item.jsx"
import Estrutura from "./estrutura/estrutura.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Estrutura nome={"Cliente +"} tipo={"promo"}/>
    <Estrutura nome={"Outros"} tipo={"saudável"}/>

  </StrictMode>,
)

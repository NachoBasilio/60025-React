import { Card } from "./components/Card/Card"


export const ItemsListContainer = () => {
    return <>
        <Card
        imagenURL="https://pbs.twimg.com/profile_images/1618750107481939969/CuxDQBTX_400x400.jpg" 
        name="Ignacio Basilio"
        username="IgnaDev"
        details="El desarrollador Mas Rápido Del Oeste"
        ></Card>
        <Card
        imagenURL="https://i.blogs.es/c3747a/steve-jobs-presentacion/375_375.webp" 
        name="Steve Jobs"
        username="Steve007"
        details="El trabajo va a ocupar la mayor parte de tu vida, y la única forma de estar realmente satisfecho es hacer aquello que crees es un gran trabajo. "
        ></Card>
    </>
}
import React, {useState} from "react"; // импорт хука состояния useState
import {FaStar} from "react-icons/fa" // импорт favicon(FaStar) - иконок, где fa - папка, в которой находятся нужные иконки


const Star = ({selected = false, whenClick = f => f}) => ( 
    <FaStar color={selected ? "red" : "grey"} onClick={whenClick} />   
)

const createArray = length => [...Array(length)] 

// определяем style (style = object - внешний обьект, тот что определен в компоненте section, как аргумент) 

export default function StarRating ({style = {}, totalStars = 5, ...props}) {  // передаем дополнительные свойства указанные в файле section.js для компонента starRating с помощью ...props

    const [selectedStars, setSelectedStars] = useState(0)

// данному div дополнительно припысываем padding + передаем дополнительные стили для div, которые находятся в обьекте style c помощью оператора расщепления

    return (
        
        <div style={{ padding: 5, ...style }} {...props}>  // далее передаем свойства для элемента div

        {createArray(totalStars).map((n,i) => (<Star key={i} selected={selectedStars > i} whenClick={() => setSelectedStars(i +1)} />))
        }
        <p>{selectedStars} z {totalStars}</p>
        </div>
    )

    

}


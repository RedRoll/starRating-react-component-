import React from "react"

import StarRating from "./StarRating"


function Section () {
    return (
        <section className="first-section-site"> // можно создавать дополнительную функциональность, например добавить дополнительное свойство для компонента - функцию/стили. А потом, в компоненте добавить их куда нужно с помощью оператора расщепления ...props
            <StarRating style = {{ backgroundColor: "lightblue" }} onDoubleClick = {() => alert("Double click on the star!")} />  
        </section>
    )    
    
}

// style = object. Будет использоваться в компоненте / обрати внимание на то, как пишеться стиль фона (второе слово с большой буквы)

export default Section
import React from 'react'
import preloader from "../../commonComponents/images/preloader.svg"



let Preloader: React.FC = () => {
    return <div  style={ { backgroundColor: 'white' } }>
        <img src={preloader} />
    </div>
}

export default Preloader

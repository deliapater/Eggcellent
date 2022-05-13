import React from 'react';


const Content = () => {
    const ImageOne = './egg.jpeg'
    const ImageTwo = './egg-2.jpeg'
    return ( 
        <>
        <div className="menu-card">
            <img src={require(`${ImageOne}`)} alt='egg' className='h-full rounded mb-20 shadow'/>
            <div className="center-content">
                <h2 className="text-2xl mb-2">Egg Muffins</h2>  
                <p className='mb-2'>Crispy, delicious, and nutritious</p>    
                <span>£12</span>  
            </div>
        </div>
        <div className="menu-card">
            <img src={require(`${ImageTwo}`)} alt='egg' className='egg-image h-full rounded mb-20 shadow'/>
            <div className="center-content">
                <h2 className="text-2xl mb-2">Egg Salad</h2>  
                <p className='mb-2'>Crispy, delicious, and nutritious</p>    
                <span>£15</span>  
            </div>
        </div>
        </>
     );
}
 
export default Content;
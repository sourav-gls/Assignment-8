import Image from 'next/image';
import React from 'react';

const AnimalsCard = ({post}) => {
    return (
      <div className="card bg-base-100 w-72 shadow-sm">
        
          <Image
                     src="https://images.unsplash.com/photo-1560888126-5c13ad3f9345?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Livestock Image"
                      width={300}
                      height={200}
                      className='rounded-xl'
                     />
       
        <div className="card-body">
          <h2 className="card-title">{post.name}</h2>
          <p>{post.description}</p>
          <p>{post.weight} KG</p>
          <h2>{post.price}</h2>
          <div className="card-actions justify-end">
          <div className="btn rounded-md">More Details ...</div>
            
          </div>
        </div>
      </div>
    );
};

export default AnimalsCard;
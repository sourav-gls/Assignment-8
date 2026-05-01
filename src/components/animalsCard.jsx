import Image from 'next/image';
import React from 'react';

const AnimalsCard = ({post}) => {
    return (
      <div className="card bg-base-100 w-72 shadow-sm">
        
          <Image
                     src={post.image}
                      alt="Livestock Image"
                      width={300}
                      height={200}
                      className='rounded-xl h-75'
                     />
       
        <div className="card-body">
          <h2 className="card-title">{post.name}</h2>
          <p>{post.description}</p>
          <div className="badge badge-outline badge-primary">{post.weight} KG</div>
          <h2 className='card-title'>{post.price} TK</h2>
          <div className="card-actions mt-3">
          <div className="btn rounded-md">More Details ...</div>
            
          </div>
        </div>
      </div>
    );
};

export default AnimalsCard;
import Image from 'next/image';
import React from 'react';

const PostCard = ({post}) => {
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
  
   
 
  <div className="card-body">
    <h2 className="card-title">
      {post.name}
      <div className="badge badge-secondary">Best Collection</div>
    </h2>
    <p>{post.description}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">More Collection</div>
      
    </div>
  </div>
</div>
    );
};

export default PostCard;
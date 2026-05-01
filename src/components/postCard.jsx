import Image from 'next/image';


const PostCard = ({post}) => {
    return (
        <div className="card bg-base-100 w-72 shadow-sm">
  
    <Image
               src={post.image}
                alt="Livestock Image"
                width={300}
                height={200}
                className='rounded-xl'
               />
 
  <div className="card-body">
    <div className="badge badge-secondary">Best Collection</div>
    <h2 className="card-title">{post.name}</h2>
    <p>{post.description}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">More Collection ...</div>
      
    </div>
  </div>
</div>
    );
};

export default PostCard;
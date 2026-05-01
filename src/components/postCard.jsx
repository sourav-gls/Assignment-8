import Image from 'next/image';
import Link from 'next/link';


const PostCard = ({post}) => {
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
    <div className="badge badge-secondary">Best Collection</div>
    <h2 className="card-title">{post.name}</h2>
    <p className='text-gray-500'>{post.description}</p>
    <div className="card-actions mt-3">
      <Link href={"/animals"}><div className="badge badge-outline">More Collection ...</div></Link>
      
    </div>
  </div>
</div>
    );
};

export default PostCard;
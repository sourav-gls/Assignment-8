import { cache } from "react";
import PostCard from "./postCard";


const BestDeals = async () => {

   const data = await  fetch('http://localhost:3000/data.json' ,
    {cache: 'no-store'

    }
   );
   if (!data.ok){
    throw new Error('failed to fetch data')
   }
  const posts = await data.json();
  const topPosts = posts.slice(0,4) ;
  
    return ( 
        <div className="bg-base-200 pt-10 pb-10 ">
        <h1 className="text-4xl items-center justify-center text-center  mb-8 font-semibold">Top Collections</h1>
        <div className="grid sm:grid-cols-4 gap-10 w-5/6 mx-auto">
            {topPosts.map(post => <PostCard key={post.id} post={post}></PostCard>)}
        </div>
        </div>
    );
};

export default BestDeals;
import PostCard from "./postCard";


const BestDeals = async () => {
  const data = await fetch('https://assignment-8-omega-nine.vercel.app/data.json')
  const posts = await data.json()
  const topPosts = posts.slice(0,4)
  
    return ( 
        <div className="bg-base-200 pt-10 pb-10 ">
        <h1 className="text-4xl items-center justify-center text-center  mb-8 font-semibold">Top Collections</h1>
        <div className="grid grid-cols-4 gap-10 w-5/6 mx-auto">
            {topPosts.map(post => <PostCard key={post.id} post={post}></PostCard>)}
        </div>
        </div>
    );
};

export default BestDeals;
import PostCard from "./postCard";


const BestDeals = async () => {
  const data = await fetch('https://assignment-8-omega-nine.vercel.app/data.json')
  const posts = await data.json()
  const topPosts = posts.slice(0,4)
  
    return ( 
        <>
        <h1>Best Deals</h1>
        <div>
            {topPosts.map(post => <PostCard key={post.id} post={post}></PostCard>)}
        </div>
        </>
    );
};

export default BestDeals;
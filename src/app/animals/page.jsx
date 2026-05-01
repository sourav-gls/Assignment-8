import AnimalsCard from "@/components/animalsCard";


const Animals = async() => {
  const data = await fetch('https://assignment-8-omega-nine.vercel.app/data.json')
  const posts = await data.json()
  console.log(posts)
    return (
        <div>
            {
                posts.map(post =><AnimalsCard key={post.id} post={post}></AnimalsCard>)
            }
            
        </div>
    );
};

export default Animals;
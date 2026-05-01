import AnimalsCard from "@/components/animalsCard";


const Animals = async() => {
  const data = await fetch('https://assignment-8-omega-nine.vercel.app/data.json')
  const posts = await data.json()
  
    return (
        <div className="grid grid-cols-4 gap-10 w-5/6 mx-auto pt-15 pb-15">
            {
                posts.map(post =><AnimalsCard key={post.id} post={post}></AnimalsCard>)
            }
            
        </div>
    );
};

export default Animals;
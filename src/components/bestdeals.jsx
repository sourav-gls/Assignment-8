

const BestDeals = async () => {
   const res = await fetch('https://pixgen-eta.vercel.app/data.json')
    const photos = await res.json()
   console.log(data);
    return ( 
        <div>
            best deal
        </div>
    );
};

export default BestDeals;
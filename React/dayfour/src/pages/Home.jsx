import image1 from '../assets/hero.png'

const Home = () => {

    const arrobj = [
        {hero: "Vijay", movie: "JanaNayagan", image: image1 },
        {hero: "Surya", movie: "Soorarai potru" },
        {hero: "Ajith", movie: "Kandukonden Kandukonden" },
        {hero: "Soori", movie: "Mandaadi" }

    ]
  return (

    <div className="  p-10 flex justify-evenly">
    
      {arrobj.map((e,i)=>(
        <div key={i+1} className="bg-blue-300 h-70 rounded-2xl p-20 w-80">
          <p>Hero: {e.hero}</p>
          <p>Movie Title: {e.movie}</p>
          
        </div>
      ))}

    </div>
  );
};

export default Home;

import CardsSection from "./cards/cards.section";

const Home = () => {
  return (
    <div className="">
      <h1 className="font-bold text-3xl px-3">Dashboard</h1>

      <CardsSection/>
      <img src="../../../public/assets/Sales Details.png" alt="" className="w-full " />
    </div>
  );
};

export default Home;

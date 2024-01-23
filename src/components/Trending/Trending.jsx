import "./Trending.css";
import Data from "./Data";
import TrendingCard from "./TrendingCard";

// FOR THIS ONE, FOR PRACTICE, I WILL MAKE A LIST OF DATA AND USE
// SEPERATE COMPONENTS FOR EACH TRENDING CARD

const Trending = () => {
  return (
    <section>
      <div className="trending">
        {Data.map((entry) => (
          <TrendingCard
            key={entry.id}
            number={entry.number}
            image={entry.image}
            imageAlt={entry.imageAlt}
            title={entry.title}
            description={entry.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Trending;

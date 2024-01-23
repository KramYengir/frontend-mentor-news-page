import PropTypes from "prop-types";

const TrendingCard = ({ number, image, imageAlt, title, description }) => {
  return (
    <div className="trending__card">
      {" "}
      <img src={image} alt={imageAlt} />
      <div className="card__text">
        <h2>{number}</h2>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

TrendingCard.propTypes = {
  number: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default TrendingCard;

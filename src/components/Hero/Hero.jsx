import "./Hero.css";
import heroIMG from "../../assets/images/image-web-3-mobile.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <img src={heroIMG} alt="Image of colorful shapes" />
      <h1>The Bright Future of Web 3.0?</h1>
      <p>
        We dive into the next evolution of the web that claims to put the power
        of the platforms back into the hands of the people. But is it really
        fulfilling its promise?
      </p>
      <button>Read More</button>
    </section>
  );
};

export default Hero;

import "./Hero.css";
import heroMobileIMG from "../../assets/images/image-web-3-mobile.jpg";
import heroDesktopIMG from "../../assets/images/image-web-3-desktop.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <img
        src={heroMobileIMG}
        alt="Image of colorful shapes"
        className="hero-mobile-img"
      />
      <img
        src={heroDesktopIMG}
        alt="Image of colorful shapes"
        className="hero-desktop-img"
      />
      <div className="hero__bottom">
        <h1>The Bright Future of Web 3.0?</h1>
        <div className="hero__cta">
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button>Read More</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

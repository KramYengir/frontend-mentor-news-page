import "./Sidebar.css";

const Sidebar = () => {
  return (
    <section>
      <aside>
        <h2>New</h2>
        <h3>Hydrogen VS Electric Cars</h3>
        <p>Will hydrogen-fueled cars ever catch up tp EVs?</p>
        <hr />
        <h3>The Downside of AI Artistry</h3>
        <p>
          The Downsides of AI Artistry What are the possible adverse effects of
          on-demand AI image generation?
        </p>
        <hr />
        <h3>Is VC Funding Drying Up?</h3>
        <p>
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </aside>
    </section>
  );
};

export default Sidebar;

// FOR THIS ASSIGNMENT, I HARDCODED THE INFORMATION ABOVE,
// HOWEVER, FOR A PROJECT WITH DYNAMIC CONTENT, I WOULD
// HAVE USED SEPERATE COMPONENTS FOR EACH PIECE OF INFORMATION,
// WHICH I WOULD HAVE STOED IN AN ARRAY - I.E. THE USUAL
// REACT WAY

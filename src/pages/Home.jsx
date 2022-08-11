import React from "react";
import pic from "../Assets/discordScreenImg.png";

export const Home = () => {
  return (
    <>
      <section id="home" className="background">
        <div className="window">
          <h1 className="heading">
            welcome to <br /> Silent Army
          </h1>
          <div className="buttons">
            <button className="btn bttn2">
              <a
                href="https://www.youtube.com/channel/UCK31_XXjN6rcebRQu1nyylg"
                className="btn41-43 btn-41"
              >
                Join Membership
              </a>{" "}
            </button>
            <span> </span>

            <button className="btn btn1">
              <a
                href="https://www.youtube.com/channel/UCK31_XXjN6rcebRQu1nyylg"
                className="btn41-43 btn-41"
              >
                Subscribe Now
              </a>{" "}
            </button>
          </div>
        </div>
      </section>

      <section className="container1">
        <div className="latestBox1">
          <span>Silent Army</span>
          <h1>Latest Videos</h1>
        </div>
        <div className="latestBox">
          <div className="ytbox">
            {/* <iframe width="448" height="248"
src="https://www.youtube.com/embed?v=05j7TEO2k80?controls=0" frameborder="0" allowfullscreen>
</iframe> */}
            <iframe
              width="450"
              height="250"
              src="https://www.youtube.com/embed/05j7TEO2k80"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
              title="video"
            />{" "}
          </div>
          <div className="ytbox">
            <iframe
              width="450"
              height="250"
              src="https://www.youtube.com/embed/sGCPhOGa_J4"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
              title="video"
            />{" "}
          </div>
          <div className="ytbox">
            <iframe
              width="450"
              height="250"
              src="https://www.youtube.com/embed/VCEPrSORqWI"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
              title="video"
            />{" "}
          </div>
        </div>
        <div className="arrowbox">
          <h3>
            Watch All Videos<h4>→</h4>
          </h3>
        </div>
      </section>

      <section className="container2">
        <div>
          <h1>Get Weekly Updates Here ,</h1>
          <h2>→</h2>
        </div>
      </section>
      <section className="container3">
        <div className="discordBox">
          <h1>Join Our Discord Server</h1>
          <br />
          <h2>Now</h2>
        </div>

        <div className="DiscordImg">
          {/* <img src="Assets\discordScreenImg.png" alt="Discord" /> */}
          <img src={pic} alt="Discord" />
        </div>
      </section>
    </>
  );
};

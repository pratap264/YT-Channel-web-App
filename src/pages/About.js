import React from "react";
import "./About.css";

export const About = () => {
  function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "about.txt", true);
    xhttp.send();
  }
  return (
    <>
      <section className="container5">
        <div className="Box1">
          <div className="AboutText">
           
            <h1>Feel free to ask us anything!</h1>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              itaque reprehenderit voluptatibus totam harum repellat et sapiente
              animi saepe vero asperiores quo nobis consectetur magni, nulla
              obcaecati deleniti mollitia rem. Beatae, aliquam? Molestiae
              aliquam officiis ipsam porro ipsa fuga provident nulla voluptate
              cum nemo ea molestias, pariatur tempore perferendis tempora.
            </p>
           
          </div>
          
          <form className="form">
            <div class="aboutform">
              <div class="form-name">
                <label for="inputname">Full Name</label>
                <br />
                <input type="Name" class="form-control" id="inputname" />
                <br />
              </div>
              <div class="form-group col-md-6">
                <label for="inputEmail4">Email</label>
                <br />
                <input type="email" class="form-control" id="inputEmail4" />
                <br />
              </div>
              <div class="form-number">
                <label for="inputnumber">Phone Number</label>
                <br />
                <input type="text" class="form-control" id="inputnumber" />
                <br />
              </div>
              <div class="form-massage">
                <br />
                <label for="inputtext">Massage</label>
                <br />
                <textarea type="text" class="textarea" id="inputtext" />
                <br />
              </div>
            </div>

            <div class="form-group">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label class="form-check-label" for="gridCheck">
                  Confirm
                </label>
                
              </div>
            </div>
            <br />
            <button type="submit" class="btnAbout">
              Send Massage
            </button>
            <br />
          </form>
        </div>
      </section>

      <section>
        <div>

        </div>
      </section>
    </>
  );
};

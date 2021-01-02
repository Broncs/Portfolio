import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
const Contact = () => {
  return (
    <section>
      <div>
        <div>
          <form>
            <h2>Leave a message!</h2>
            <input type="text" placeholder="Seu nome:" />
            <input type="text" placeholder="Email:" />
            <input type="text" placeholder="assunto:" />
            <textarea
              placeholder="sua menssagem"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </form>
        </div>

        <div>
          <h2>Contact info</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem, ut?
          </p>
          <div>
            <ul>
              <li>
                <GoLocation />
                <h5>Location</h5>
                <span>los angeles </span>
              </li>
              <li>
                <AiOutlinePhone />
                <h5>call me at</h5>
                <span>los angeles </span>
              </li>
              <li>
                <AiOutlineMail />
                <h5>Email me at</h5>
                <span>los angeles </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

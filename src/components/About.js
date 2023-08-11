import React from "react";

const About = () => {
  return (
    <div className="about-page">
      <h1>About</h1>
      <p>Create a new blog and connect with everyone!</p>
      <br />
      <p>You need to register or login to create a new post</p>
      <br />
      <p>
        <span className="bold">Use of email:</span>
      </p>
      <p>
        The email is a way to reset the password of a user (working in progrss)
      </p>
      <br />
      <br />
      <p>
        <span className="bold">Site notes:</span>
      </p>
      <p>
        This site is fully functional and there are features to be added in the
        future.
      </p>
      <br />
      <br />
      <br />
      <br />
      <p>
        This app was made with the MERN stack. All the resources can be found in
        the following repositories:
      </p>
      <p>
        <span className="bold">Fronend: </span>{" "}
        <a href="#" className="link">
          frontend repository
        </a>
      </p>
      <p>
        <span className="bold">Backend: </span>{" "}
        <a href="#" className="link">
          backend repository
        </a>
      </p>
      <br />
      <p>
        If you appreciate my work, feel free to check out my GitHub profile,{" "}
        <a href="https://github.com/YourGitHubUsername" className="link">
          SamAndao
        </a>
        .
      </p>
    </div>
  );
};

export default About;

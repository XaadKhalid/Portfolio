import { Link } from "react-router-dom";
import About from "../About/About";
import Resume from "../Resume/Resume";

export default function Home() {
  return (
    <>
      <div
        className="grid sm:grid-cols-12 gap-4 py-12"
        style={{ backgroundColor: "#F0F8FF" }}
      >
        <div className="sm:col-span-8">
          <h1 className="font-bold text-5xl">Hello, i'm</h1>
          <h6 className="font-bold text-5xl">Saad Khalid</h6>
          <h6 className="font-bold text-5xl">Software Engineer</h6>
          <p className="my-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            eveniet. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Inventore quae aspernatur consequatur tenetur ducimus dolor quod
            atque quasi? Id dolorum iusto numquam consequatur quas eum neque
            repudiandae error obcaecati ab?
          </p>
          <button className="bg-blue-900 text-white font-semibold px-9 py-1 rounded-md my-2">
            Hire Me
          </button>
          <br />
          <Link to={"/"} className="font-semibold py-1 underline">
            Download Resume
          </Link>
        </div>
        <div className="sm:col-span-4 justify-center">
          <img
            src="src\assets\Profile.png"
            alt=""
            style={{
              // background: "linear-gradient(to top, #F0FFFF, #444848)",
              background: "linear-gradient(to top, #FFFFF0, #444848)",
              "border-top-left-radius": "150px",
              "border-bottom-right-radius": "150px",
              height: "390px",
              float: "right",
            }}
          />
        </div>
        {/* <div className="sm:col-span-4 flex justify-center items-center rounded-lg flex-col">
      <div className="bg-blue-100">
        <span className="font-bold text-xl text-center">13 +</span>
        <p className="border-b-2 font-bold text-xl">Years of Experince</p>
        <br />
        <span className="font-bold text-xl text-center">13 +</span>
        <p className="border-b-2 font-bold text-xl">Projects Completed</p>
        <br />
        <span className="font-bold text-xl text-center">13 +</span>
        <p className="border-b-2 font-bold text-xl">Client Statisfaction</p>
        <br />
      </div>
    </div> */}
      </div>
      <About />
      <Resume />
    </>
  );
}

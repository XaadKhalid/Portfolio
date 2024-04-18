import { FaCheckCircle } from "react-icons/fa";

export default function About() {
  const services = ["React Js", "BootStrap/Tailwind", ".Net", "SQL Server"];
  return (
    <div
      className="grid sm:grid-cols-12 gap-4 py-12"
      style={{ backgroundColor: "#F0F8FF" }}
      // style={{ backgroundColor: "#fff7f0" }}
      // style={{ backgroundColor: "#E1EBEE" }}
    >
      <div className="sm:col-span-3 justify-center px-12">
        <img
          src="src\assets\profile2_prev_ui.png"
          alt=""
          style={{
            // background: "linear-gradient(to top, #F0FFFF, #444848)",
            background: "linear-gradient(to top, #FFFFF0, #444848)",
            "border-bottom-left-radius": "150px",
            "border-top-right-radius": "150px",
            height: "390px",
          }}
        />
      </div>
      <div className="sm:col-span-9">
        <h3 className="font-semibold text-3xl underline mb-5">About Me</h3>
        <div>
          <h5 className="font-bold text-5xl mb-5">
            Professional Problem Solutions For Web Applications
          </h5>
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            ipsum officiis, eius dolor quisquam aliquam dolore, accusamus nam
            voluptatum animi fuga vero voluptate eos omnis? Minima commodi
            provident vero temporibus?
          </p>
        </div>
        <div>
          <ul className="list-none grid grid-cols-2 gap-4">
            {services.map((service, index) => (
              <li key={index} className="flex items-center">
                <FaCheckCircle className="text-blue-900 mr-2" />
                <span className="font-bold">{service}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4 rounded-md my-6 px-6 py-4 bg-blue-950 text-white">
          <div className="flex flex-col">
            <span>Email Me</span>
            <span>khalidxaad@gmail.com</span>
          </div>
          <div className="flex flex-col">
            <span>Make a Call</span>
            <span>+92-3175455816</span>
          </div>
        </div>
      </div>
    </div>
  );
}

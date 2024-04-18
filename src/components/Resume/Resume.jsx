import { FaAngleDoubleUp } from "react-icons/fa";

export default function Resume() {
  return (
    <>
      <div className="text-center" style={{ backgroundColor: "#F0F8FF" }}>
        <h5 className="font-bold text-5xl pt-5">Popular Services</h5>
        <p className="text-3xl mt-2">
          My <b>Special Services</b> For your Business Development
        </p>
      </div>
      <div
        className="grid sm:grid-cols-12 gap-4 py-12"
        style={{ backgroundColor: "#F0F8FF" }}
      >
        <div className="sm:col-span-6 border-yellow-700 border-solid border-2 rounded-xl p-6">
          <div className="flex justify-between items-center px-20">
            <h1>01.</h1>
            <div>
              <h4 className="font-bold ">FrontEnd Development</h4>
              <p className="text-gray-700">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="bg-black rounded-full p-4">
              <FaAngleDoubleUp className="text-blue-100 text-xl cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="sm:col-span-6 border-yellow-700 border-solid border-2 rounded-xl p-6">
          <div className="flex justify-between items-center px-20">
            <h1>02.</h1>
            <div>
              <h4 className="font-bold ">BackEnd Development</h4>
              <p className="text-gray-700">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="bg-black rounded-full p-4">
              <FaAngleDoubleUp className="text-blue-100 text-xl cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="sm:col-span-6 border-yellow-700 border-solid border-2 rounded-xl p-6">
          <div className="flex justify-between items-center px-20">
            <h1>03.</h1>
            <div>
              <h4 className="font-bold ">Api Development</h4>
              <p className="text-gray-700">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="bg-black rounded-full p-4">
              <FaAngleDoubleUp className="text-blue-100 text-xl cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="sm:col-span-6 border-yellow-700 border-solid border-2 rounded-xl p-6">
          <div className="flex justify-between items-center px-20">
            <h1>04.</h1>
            <div>
              <h4 className="font-bold ">Database Development</h4>
              <p className="text-gray-700">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="bg-black rounded-full p-4">
              <FaAngleDoubleUp className="text-blue-100 text-xl cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

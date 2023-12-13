import img from "../assets/IMG-20220608-WA0075.jpg";

const Messages = () => {
  return (
    <div className="flex gap-2 mb-5 pl-4">
      <div className="flex-row items-center justify-center">
        <img
          src={img}
          alt="img"
          className="h-10 w-10 rounded-full object-cover"
        />
      </div>
      <div className="mx-5">
        <p className="px-3 py-2 bg-slate-300 rounded-t-lg rounded-br-lg block w-72 sm:w-96 break-words">
          hellotherehellotherehellotherehellotherehellotherehelloellotherehellotherehellotherehellotherehellotherehellohellotherehellotherehellotherehellotherehellotherehello
        </p>
        {/* <img src={img} alt="img" className="w-[50%] rounded-lg" /> */}
        <span className="text-xs text-gray-500">just now</span>
      </div>
    </div>
  );
};

export default Messages;

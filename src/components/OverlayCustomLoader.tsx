import Logo from "../assets/images/logo.svg";

const OverlayCustomLoader = () => {
  return (
    <div className="w-full h-screen flex-1 flex justify-center place-items-center">
      <div className="flex flex-col justify-center">
        <img src={Logo} className="w-96 ml-5" />
        <h1 className="text-xl ">
          Kindly bear with us as we configure your platform.
        </h1>
      </div>
    </div>
  );
};

export default OverlayCustomLoader;

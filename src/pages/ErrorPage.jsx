import SwiggyErrorImage from "../assets/swiggyError.png";
import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const routeError = useRouteError();
  console.log(routeError,"adasd")
  return (
    <>
      {/* <img src={SwiggyErrorImage} alt="Swiggy Error" /> */}
      <section className="text-center flex flex-col pt-10 justify center item-center h-96">
        <div className=" justify-center flex">
        <img src={SwiggyErrorImage} className="size-80" alt="Swiggy Error" />
        </div>
        <h1 className="text-6xl font-bold mb-4">We'll be back shortly</h1>
        <p className="text-xl mb-5">We are fixing a temporary glitch. Sorry for the inconvenience.</p>
        <div>
          <Link
            to="/"
            className="text-white bg-orange-600 hover: hover:bg-orange-700 w-fit p-2 rounded"
          >
            Go Back
          </Link>
        </div>
      </section>
    </>
  );
}

export default ErrorPage;

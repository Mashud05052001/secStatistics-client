import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-notifications-component/dist/theme.css";
import { Helmet } from "react-helmet-async";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const field = e.target;
    const value = {
      name: field.name.value,
      session: field.session.value,
      currentDept: field.department.value,
      desireDept: field.desireDepartment.value,
      reg: field.reg.value,
    };
    if (value) {
      toast("Successfully Data Enrolled", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
      console.log(value);
      field.reset();
    }
  };
  return (
    // <div className="mt-10">
    //   <Helmet>
    //     <title>SECStatics-Form</title>
    //   </Helmet>
    //   <form
    //     className="grid lg:grid-cols-2 pl-10 lg:pl-0 gap-y-4"
    //     onSubmit={handleSubmit}
    //   >
    //     {/*  Name  */}
    //     <div className="max-w-xs lg:max-w-sm flex justify-between items-center  mx-auto w-full">
    //       <label className="label">
    //         <span className="mr-2">Name</span>
    //       </label>
    //       <input
    //         type="text"
    //         className="input input-bordered rounded-md max-w-52"
    //         name="name"
    //         required
    //       />
    //     </div>
    //     {/* Session */}
    //     <div className="max-w-xs lg:max-w-sm flex justify-between items-center mx-auto w-full">
    //       <label className="label">
    //         <span className="mr-2">Session</span>
    //       </label>
    //       <input
    //         type="text"
    //         className="input input-bordered rounded-md max-w-52"
    //         name="session"
    //         required
    //       />
    //     </div>
    //     {/* Registration No */}
    //     <div className="max-w-xs lg:max-w-sm flex justify-between  items-center mx-auto w-full">
    //       <label className="label">
    //         <span className="mr-2">Registration No</span>
    //       </label>
    //       <input
    //         type="number"
    //         className="input input-bordered rounded-md max-w-52"
    //         name="reg1"
    //       />
    //     </div>
    //     {/* Present Percentage */}
    //     <div className="max-w-xs lg:max-w-sm flex justify-between  items-center mx-auto w-full ">
    //       <label className="label">
    //         <span className="mr-2">Present Percentage</span>
    //       </label>
    //       <input
    //         type="number"
    //         className="input input-bordered rounded-md max-w-52"
    //         name="reg1"
    //       />
    //     </div>
    //     {/* Current Department */}
    //     <div className="max-w-xs lg:max-w-sm flex justify-between items-center mx-auto w-full">
    //       <label className="label">
    //         <span className="mr-2">Department Name</span>
    //       </label>
    //       <select
    //         className="select select-bordered rounded-md max-w-52 w-32"
    //         name="currentDept"
    //       >
    //         <option selected value={"cse"}>
    //           CSE
    //         </option>
    //         <option value={"eee"}>EEE</option>
    //         <option value={"civil"}>CIVIL</option>
    //       </select>
    //     </div>
    //     <div className="max-w-xs lg:max-w-sm flex justify-between  items-center mx-auto w-full">
    //       <label className="label">
    //         <span className="mr-2">Your Desire Department</span>
    //       </label>
    //       <select
    //         className="select select-bordered rounded-md max-w-52 w-32"
    //         name="desireDept"
    //       >
    //         <option selected value={"cse"}>
    //           CSE
    //         </option>
    //         <option value={"eee"}>EEE</option>
    //         <option value={"civil"}>CIVIL</option>
    //       </select>
    //     </div>
    //     <div className="mt-10  max-w-xs lg:max-w-sm flex  lg:justify-center lg:col-span-2 items-center mx-auto w-full">
    //       <button type="submit" className="btn">
    //         Submit
    //       </button>
    //       <button type="reset" className="btn mx-4">
    //         Reset
    //       </button>
    //     </div>
    //   </form>
    // </div>
    <div className="mt-10">
      <Helmet>
        <title>SECStatics-Form</title>
      </Helmet>
      <form onSubmit={handleSubmit}>
        <section className="grid md:grid-cols-2 pl-10 lg:pl-0 gap-y-4">
          {/*  Name  */}
          <div className="max-w-xs lg:max-w-sm flex justify-between items-center  mx-auto w-full">
            <label className="label">
              <span className="mr-2">Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered rounded-md w-48"
              name="name"
              required
            />
          </div>
          {/* Session */}
          <div className="max-w-xs lg:max-w-sm flex justify-between  items-center mx-auto w-full">
            <label className="label">
              <span className="mr-2">Session</span>
            </label>
            <input
              type="text"
              className="input input-bordered rounded-md w-48"
              name="session"
              required
            />
          </div>
          {/* Registration No */}
          <div className="max-w-xs lg:max-w-sm flex justify-between  items-center mx-auto w-full">
            <label className="label">
              <span className="mr-2">Registration No</span>
            </label>
            <input
              type="number"
              className="input input-bordered rounded-md w-48"
              name="reg"
              required
            />
          </div>
          {/* Present Percentage */}
          <div className="max-w-xs lg:max-w-sm flex justify-between  items-center mx-auto w-full ">
            <label className="label">
              <span className="mr-2">Present Percentage</span>
            </label>
            <input
              type="number"
              className="input input-bordered rounded-md w-48"
              name="reg1"
            />
          </div>
          {/* Department */}
          <div className="max-w-xs lg:max-w-sm flex justify-between items-center mx-auto w-full">
            <label className="label">
              <span className="mr-2">Department Name</span>
            </label>
            <select
              className="select select-bordered rounded-md w-48"
              name="department"
              defaultValue={"cse"}
            >
              <option value={"cse"}>CSE</option>
              <option value={"eee"}>EEE</option>
              <option value={"civil"}>CIVIL</option>
            </select>
          </div>
          {/* Desire Department */}
          <div className="max-w-xs lg:max-w-sm flex justify-between items-center mx-auto w-full">
            <label className="label">
              <span className="mr-2">Desire Department</span>
            </label>
            <select
              className="select select-bordered rounded-md w-48"
              name="desireDepartment"
              defaultValue={"cse"}
            >
              <option value={"cse"}>CSE</option>
              <option value={"eee"}>EEE</option>
              <option value={"civil"}>CIVIL</option>
            </select>
          </div>
        </section>
        <div className="mt-10  flex  justify-center items-center mx-auto w-full">
          <button type="submit" className="btn">
            Submit
          </button>
          <button type="reset" className="btn mx-4">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

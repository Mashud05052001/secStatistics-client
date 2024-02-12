import axios from "axios";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";

const SemesterEndForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const field = e.target;
    const value = {
      name: field.name.value,
      reg: field.reg.value,
      department: field.department.value,
      cgpa: Number(field.cgpa.value),
      haveCarry: field.carry.value === "carry" ? true : false,
    };
    axios.post("http://localhost:5000/cgpa", value).then((res) => {
      if (res.data.acknowledged) {
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
    });
  };
  return (
    <div className="mt-10">
      <Helmet>
        <title>SECStatics-Form</title>
      </Helmet>
      <form onSubmit={handleSubmit}>
        {/*  Name  */}
        <section className="grid md:grid-cols-2 pl-10 lg:pl-0 gap-y-4">
          <div className="max-w-xs lg:max-w-sm flex justify-between items-center  mx-auto w-full">
            <label className="label">
              <span className="mr-2">Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered rounded-md max-w-52"
              name="name"
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
              className="input input-bordered rounded-md max-w-52"
              name="reg"
              required
            />
          </div>
          {/* Last Exam CGPA */}
          <div className="max-w-xs lg:max-w-sm flex justify-between  items-center mx-auto w-full ">
            <label className="label">
              <span className="mr-2">Your Last Exam CGPA</span>
            </label>
            <input
              type="number"
              className="input input-bordered rounded-md max-w-52"
              name="cgpa"
              min={2}
              max={4}
              step="0.01"
              required
            />
          </div>
          {/* Department */}
          <div className="max-w-xs lg:max-w-sm flex justify-between items-center mx-auto w-full">
            <label className="label">
              <span className="mr-2">Department Name</span>
            </label>
            <select
              className="select select-bordered rounded-md max-w-52 w-32"
              name="department"
              defaultValue={"cse"}
            >
              <option value={"cse"}>CSE</option>
              <option value={"eee"}>EEE</option>
              <option value={"civil"}>CIVIL</option>
            </select>
          </div>
          {/* Carry or Not */}
          <div className="max-w-xs lg:max-w-sm flex  justify-between items-center mx-auto w-full">
            <p>Do you have any carry? </p>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                name="carry"
                value={"carry"}
                className="radio radio-sm"
                required
              />
              <span className="label-text">Yes</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                name="carry"
                value={"noncarry"}
                className="radio radio-sm"
              />
              <span className="label-text">No</span>
            </label>
            {/* <input type="radio" name="radio-1" className="radio" defaultChecked />
          <input type="radio" name="radio-1" className="radio" /> */}
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

export default SemesterEndForm;

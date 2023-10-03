import {  toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'react-notifications-component/dist/theme.css';
import { Helmet } from "react-helmet-async";

const Form = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const field = e.target;
    const value = {
      name:field.name.value,
      session: field.session.value,
      currentDept:field.currentDept.value,
      desireDept:field.desireDept.value,
      reg:(field.reg1.value===''?field.reg2.value:field.reg1.value)
    }
    if(value){
      toast('Successfully Data Enrolled', {
        position: "top-right",  autoClose: 2000,  hideProgressBar: false, closeOnClick: true, pauseOnHover: true,
        draggable: true,  theme: "dark",
      });
    }
  } 
  return (
    <div className="mt-10">
      <Helmet>
        <title>SECStatics-Form</title>
      </Helmet>
      <form className="grid lg:grid-cols-2 pl-10 lg:pl-0 gap-y-4" onSubmit={handleSubmit}>
        <div className="max-w-xs lg:max-w-sm flex justify-between items-center  mx-auto w-full">
          <label className="label">
            <span className="mr-2">Name</span>
          </label>
          <input type="text"  className="input input-bordered max-w-52" name="name" required/>
        </div>
        <div className="max-w-xs lg:max-w-sm flex justify-between items-center mx-auto w-full">
          <label className="label">
            <span className="mr-2">Session</span>
          </label>
          <input type="text"  className="input input-bordered max-w-52" name="session" required/>
        </div>
        <div className="max-w-xs lg:max-w-sm flex justify-between  items-center mx-auto w-full lg:hidden">
          <label className="label">
            <span className="mr-2">Registration No</span>
          </label>
          <input type="number"  className="input input-bordered max-w-52" name="reg1"/>
        </div>
        <div className="max-w-xs lg:max-w-sm flex justify-between items-center mx-auto w-full">
          <label className="label">
            <span className="mr-2">Department Name</span>
          </label>
          <select className="select select-bordered max-w-52 w-32" name="currentDept">
              <option selected value={'cse'}>CSE</option>
              <option value={'eee'}>EEE</option>
              <option value={'civil'}>CIVIL</option>
            </select>
        </div>
        <div className="max-w-xs lg:max-w-sm hidden lg:flex justify-between  items-center mx-auto w-full ">
          <label className="label">
            <span className="mr-2">Registration No</span>
          </label>
          <input type="text"  className="input input-bordered max-w-52" name="reg2"/>
        </div>
        <div className="max-w-xs lg:max-w-sm flex justify-between  items-center mx-auto w-full">
          <label className="label">
            <span className="mr-2">Your Desire Department</span>
          </label>
            <select className="select select-bordered max-w-52 w-32" name="desireDept">
              <option selected value={'cse'}>CSE</option>
              <option value={'eee'}>EEE</option>
              <option value={'civil'}>CIVIL</option>
            </select>
        </div>
        <div className="mt-10  max-w-xs lg:max-w-sm flex lg:hidden items-center mx-auto w-full">
          <button type="submit" className="btn">Submit</button>
          <button type="reset" className="btn mx-4">Reset</button>
        </div>
        <div className="mt-10 w-full lg:flex justify-center hidden lg:visible col-span-2">
          <button type="submit" className="btn mx-4">Submit</button>
          <button type="reset" className="btn mx-4">Reset</button>
        </div>
      </form>
    </div>

  );
};

export default Form;

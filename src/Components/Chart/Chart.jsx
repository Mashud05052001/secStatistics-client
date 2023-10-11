import { Helmet } from 'react-helmet-async';
import Barchart1 from './Barchart1';
import PieChart1 from './PieChart1';
import { useEffect, useState } from 'react';
import ChartSelectNavigate from './ChartSelectNavigate';



const Chart = () => {
  const [data,setData] = useState([]);
  useEffect(()=>{
      fetch('fakeData.json')
      .then(res=>res.json())
      .then(data=>setData(data))
  },[]);
  return (
    <div>
      <Helmet>
        <title>SECStatics-Chart</title>
      </Helmet>
      <ChartSelectNavigate/>
      <div className='mt-10 flex lg:justify-around flex-col lg:flex-row '>
        <PieChart1 data={data}/>
        <Barchart1 data={data}/>
      </div>
      <h2 className='mt-8 text-center'>Calculation the number of students who expressed a desire to pursue studies in faculties other than their initial preferences</h2>
    </div>
  );
};

export default Chart;

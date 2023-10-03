import { Helmet } from 'react-helmet-async';
import Barchart1 from './Barchart1';
import PieChart1 from './PieChart1';


const data = [
  {
    name: 'CSE',
    Desire: 40,
    Current: 20,
    percentage : parseFloat(((20/40)*100).toFixed(2)),
  },
  {
    name: 'EEE',
    Desire: 45,
    Current: 23,
    percentage : parseFloat(((23/45)*100).toFixed(2)),
  },
  {
    name: 'CIVIL',
    Desire: 50,
    Current: 20,
    percentage : parseFloat(((20/50)*100).toFixed(2)),
  },
];

const Chart = () => {

  return (
    <div>
      <Helmet>
        <title>SECStatics-Chart</title>
      </Helmet>
      <div className='mt-10 flex lg:justify-around flex-col lg:flex-row'>
        <PieChart1 data={data}/>
        <Barchart1 data={data}/>
      </div>
      <h2 className='mt-8 text-center'>Calculation the number of students who expressed a desire to pursue studies in faculties other than their initial preferences</h2>
    </div>
  );
};

export default Chart;

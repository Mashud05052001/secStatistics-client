import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// eslint-disable-next-line react/prop-types
const CommonChart = ({data,showingKey,isPercentage}) => {
    return (
        <div className=' mt-5 w-[100%] md:w-[55%] mx-auto'>
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            
            <Tooltip/>
            <Legend />
            {
                isPercentage ? 
                    <>
                        <Bar dataKey={showingKey} fill="#8884d8" unit={'%'}/>
                        <YAxis unit={'%'}/>
                    </>
                    :
                    <>
                        <Bar dataKey={showingKey} fill="#8884d8"/>
                        <YAxis/>
                    </>
            }
            </BarChart>
        </div>
    );
};

export default CommonChart;
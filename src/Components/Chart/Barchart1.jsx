import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// eslint-disable-next-line react/prop-types
const Barchart1 = ({data}) => {
    return (
        <div className='mt-20 lg:mt-0  mx-auto'>
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
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Desire" fill="#8884d8" />
            <Bar dataKey="Current" fill="#82ca9d" />
            </BarChart>
        </div>
    );
};

export default Barchart1;
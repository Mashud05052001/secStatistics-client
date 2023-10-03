import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts';

// eslint-disable-next-line react/prop-types
const PieChart1 = ({data}) => {
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
        <div className='-mt-10  mx-auto'>
            <PieChart width={400} height={400}>
                <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="percentage"
                label
                >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
                </Pie>
                <Legend/>
                <Tooltip/>
            </PieChart>
        </div>
    );
};

export default PieChart1;
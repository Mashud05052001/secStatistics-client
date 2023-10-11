import { useNavigate } from 'react-router-dom';

const ChartSelectNavigate = () => {
    const navigate = useNavigate();
    const handleNavigate = e => {
        navigate(e.target.value)
    }
    return (
        <div className='mt-5 text-center'>
            <select 
            className="select border-2 border-gray-300 font-semibold w-full max-w-xs focus:outline-0" 
            onChange={handleNavigate}>
                <option value={'/'}>Select Comparism</option>
                <option value={'/avgGrade'}>Average Grade Comparism</option>
                <option value={'/passingRate'}>Passing Rate Comparism</option>
                <option value={'/attendanceRate'}>Attendance Rate Comparism</option>
                <option value={'/failureRate'}>Failure Rate Comparism</option>
                <option value={'/graduationRate'}>Graduation Rate Comparism</option>
            </select>
      </div>
    );
};

export default ChartSelectNavigate;
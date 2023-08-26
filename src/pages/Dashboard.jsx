import DashboardMainCard from '../features/dashboard/DashboardMainCard';

function Dashboard() {
  return (
    <>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-medium'>Dashboard</h1>
      </div>
      <div>
        <DashboardMainCard />
      </div>
    </>
  );
}

export default Dashboard;

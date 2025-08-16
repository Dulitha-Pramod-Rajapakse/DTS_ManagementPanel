import Header from "../Components/Header/Header.jsx"; 
import LocationWiseChart from "../Components/LocationWiseChart";
import DesignationWiseChart from "../Components/DesignationWiseChart.jsx";
import DailyDeploymentTable from "../Components/DailyDeploymentEx.jsx";

export default function HomeLayout() {
  return (
      <div>
        <h1 className="Topic">Attendence based on Location</h1>
        <LocationWiseChart />
        <h1 className="Topic">Attendence based on Designation</h1>
        <DesignationWiseChart />
        <DailyDeploymentTable />

      </div>
  );
}

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import LandingPage from "./pages/LandingPage/LandingPage"
import Login from "./pages/Auth/Login"
import SignUp from "./pages/Auth/SignUp"
import JobSeekerDashboard from "./pages/Joobseeker/JobSeekerDashboard"
import JobDetails from "./pages/Joobseeker/JobDetails"
import SavedJobs from "./pages/Joobseeker/SavedJobs"
import UserProfile from "./pages/Joobseeker/Userprofile"
import EmployerDashboard from "./pages/Employer/EmployerDashboard"
import JobPostingForm from "./pages/Employer/JobPostingForm"
import ManageJobs from "./pages/Employer/ManageJobs"
import ApplicationView from "./pages/Employer/ApplicationView"
import EmployerProfilePage from "./pages/Employer/EmployerProfilePage"
import ProtectedRoutes from "./routes/ProtectedRoutes"

const App = () => {
  return (
  <div>

    {/* Public Routes */}
   <Router>

    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignUp/>} />

     {/* JobSeeker Routes */}
      <Route path = "/find-jobs" element={<JobSeekerDashboard/>} />
      <Route path = "/job/:jobId" element={<JobDetails/>} />
      <Route path = "/saved-jobs" element={<SavedJobs/>} />
      <Route path = "/profile" element={<UserProfile/>} />

      {/* Protected Routes */}
      <Route element = { <ProtectedRoutes requiredRole="employer" /> } >
      <Route path = "/employer-dashboard" element={<EmployerDashboard/>} />
      <Route path = "/post-job" element={<JobPostingForm/>} />
      <Route path = "/manage-jobs" element={<ManageJobs/>} />
      <Route path = "/applicants" element={<ApplicationView/>} />
      <Route path = "/company-profile" element={<EmployerProfilePage/>} />
      </Route>

      {/* catch all routes */}
      <Route path="*" element={<Navigate to="/" replace />} />

    </Routes>

    </Router>
    <Toaster
    toastOptions={{
     className:"",
     style:{
     fontSize: "13px"
     },
    }}
    />


  </div>
  )
}

export default App
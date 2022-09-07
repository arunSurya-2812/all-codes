import "./Style.css";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import CourseForm from "./Pages/CourseForm";
import StaffForm from "./Pages/StaffForm";
import StudentForm from "./Pages/StudentForm";

export default function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Student</Link>
          <Link to="/courses">Courses</Link>
          <Link to="staffForm">StaffForm</Link>
        </nav>
        <Routes>
          <Route path="/" element={<StudentForm />} />
          <Route path="/courses" element={<CourseForm />} />
          <Route path="/staffForm" element={<StaffForm />} />
        </Routes>
      </Router>
    </div>
  );
}

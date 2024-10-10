import React, { useEffect, useState } from "react";


import useFetch from "./hooks/useFetch";

const Body = () => {
  const studentdetails = useFetch("http://localhost:3005/api/getStudent");
  console.log(studentdetails);

  const teacherdetails = useFetch("http://localhost:3005/api/getTeacher");
  console.log(teacherdetails);

  const [studentData, setStudentData] = useState(null);
  const [teacherData, setTeacherData] = useState(null);

  useEffect(() => {
    if (studentdetails != undefined) {
      setStudentData(studentdetails?.data?.data);
    }

    if (teacherdetails != undefined) {
      setTeacherData(teacherdetails?.data?.data);
    }
  }, [studentdetails, teacherdetails]);

  console.log(studentData);
  console.log(teacherData);

  return (
    <>
      {studentData?.map((item) => {
        return <div>{item.Title}</div>;
      })}
    </>
  );
};

export default Body;

// import React, { useEffect, useState } from "react";
// import useFetch from "./hooks/useFetch";

// const Body = () => {
//   // Fetch data for students and teachers
//   const { data: studentData, loading: studentLoading, error: studentError } = useFetch("http://localhost:3005/api/getStudent");
//   const { data: teacherData, loading: teacherLoading, error: teacherError } = useFetch("http://localhost:3005/api/getTeacher");

//   // State variables for storing data
//   const [students, setStudents] = useState([]);
//   const [teachers, setTeachers] = useState([]);

//   // Update state when data is fetched
//   useEffect(() => {
//     if (!studentLoading && studentData) {
//       setStudents(studentData.data || []);
//     }
//   }, [studentData, studentLoading]);

//   useEffect(() => {
//     if (!teacherLoading && teacherData) {
//       setTeachers(teacherData.data || []);
//     }
//   }, [teacherData, teacherLoading]);

//   console.log(students);
//   console.log(teachers);

//   return (
//     <div>
//       <h1>Student Data</h1>
//       <pre>{JSON.stringify(students, null, 2)}</pre>
//       <h1>Teacher Data</h1>
//       <pre>{JSON.stringify(teachers, null, 2)}</pre>
//     </div>
//   );
// };

// export default Body;

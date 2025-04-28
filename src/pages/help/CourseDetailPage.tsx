export default function CourseDetailPage() {
    return  <h1>Course Details </h1>;
}
    

  
export async function courseDetailsLoader({ params }) { 
  const { courseid } = params;
  console.log(courseid);
};

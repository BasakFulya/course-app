import { useParams } from "react-router";

export default function CourseDetailPage() {
    const { courseid,title} = useParams();
    return (
    <h1>
      Course Details {courseid} {title}
    </h1>
  );
} 

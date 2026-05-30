import { getCourse } from "../lib/getcourse";

export default async function Home() {
  const courses = await getCourse();

  return (
    <main>
      <h1>Student Dashboard</h1>

      {courses.map((course) => (
        <div key={course.id}>
          <h2>{course.title}</h2>
          <p>{course.progress}%</p>
        </div>
      ))}
    </main>
  );
}
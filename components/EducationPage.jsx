import EducationCard from "./EducationCard";

export default function EducationPage() {
  return (
    <section className="px-6 md:px-16 py-20 bg-black text-white">
      <h1 className="text-4xl md:text-6xl font-extrabold text-center bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text mb-12">
        Education & Learning
      </h1>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 mb-6 flex items-center gap-2">
            🎓 Formal Education
          </h2>
          <EducationCard
            type="formal"
            title="Bachelor of Science in Computer Science"
            subtitle="Stanford University"
            period="2015 - 2019"
            description="Concentrated in Human-Computer Interaction and Software Engineering. Graduated Magna Cum Laude with a focus on frontend technologies and user experience design."
            tags={[
              "Magna Cum Laude",
              "Dean's List",
              "HCI Focus",
              "CS Honor Society",
            ]}
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 mb-6 flex items-center gap-2">
            📘 Courses & Certifications
          </h2>
          <div className="flex flex-col gap-6">
            <EducationCard
              type="course"
              title="Advanced React Patterns"
              subtitle="Kent C. Dodds – Epic React"
              period="2023"
              status="COMPLETED"
            />
            <EducationCard
              type="course"
              title="TypeScript Masterclass"
              subtitle="Udemy – Maximilian Schwarzmüller"
              period="2023"
              status="COMPLETED"
            />
            <EducationCard
              type="course"
              title="Next.js Complete"
              subtitle="Udemy – Maximilian Schwarzmüller"
              period="2023"
              status="COMPLETED"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

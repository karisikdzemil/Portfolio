import EducationCard from "./EducationCard";

export default function EducationPage() {
  return (
    <section id="education" className="px-6 md:px-16 py-20 bg-black text-white">
      <h1 className="text-4xl md:text-6xl font-extrabold text-center bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text mb-12">
        Education & Learning
      </h1>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 mb-6 flex items-center gap-2">
            🎓 Formal Education
          </h2>
          <div className="flex flex-col gap-6">
          <EducationCard
            type="formal"
            from="right"
            title="High School Diploma – General Program"
            subtitle="Gimnazija Novi Pazar"
            period="2019 - 2023"
            description="Completed secondary education with a focus on general subjects including mathematics, Serbian language, and natural sciences. Developed strong analytical and communication skills."
            tags={[
              "High School",
              "General Education",
              "Novi Pazar",
              "Graduated 2023",
            ]}
          />

          <EducationCard
            type="formal"
            from="left"
            title="Bachelor of Science in Software Engineering"
            subtitle="State University of Novi Pazar"
            period="2023 - Present"
            description="Currently in the second year of undergraduate studies in Software Engineering. The curriculum focuses on algorithms, data structures, computer architecture, and the fundamentals of software development."
            tags={[
              "Second Year",
              "State University",
              "Software Engineering",
              "Novi Pazar",
            ]}
          />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 mb-6 flex items-center gap-2">
            📘 Courses & Certifications
          </h2>
          <div className="flex flex-col gap-6">
            <EducationCard
              type="course"
              from="right"
              title="React - The Complete Guide"
              subtitle="Udemy – Maximilian Schwarzmüller"
              period="2024"
              status="COMPLETED"
              tags={["React", "Front-End", "Next", "Redux", "Redux toolkit"]}
            />
            <EducationCard
              type="course"
              from="right"
              title="JavaScript - The Complete Guide"
              subtitle="Udemy – Maximilian Schwarzmüller"
              period="2024"
              status="COMPLETED"
            />
            <EducationCard
              type="course"
              from="right"
              title="Certified Front-End Developer"
              subtitle="RISC & NIT Novi Pazar – IT Camp Serbia"
              period="2022"
              status="COMPLETED"
              description="Certified as a Front-End Developer after successfully completing React training. Built dynamic user interfaces and learned advanced component-based architecture."
              tags={["React", "Front-End", "Certificate", "Component-Based UI"]}
            />

            <EducationCard
              type="course"
              from="right"
              title="Web Development Fundamentals"
              subtitle="RISC & NIT Novi Pazar – IT Camp Serbia"
              period="2022"
              status="COMPLETED"
              description="Completed certified training in HTML, CSS, and JavaScript. Acquired foundational web development skills including responsive layout design and interactive scripting."
              tags={["HTML", "CSS", "JavaScript", "Certificate"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

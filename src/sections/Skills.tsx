import { useState } from "react";
import SkillCard from "../ui/SkillCard";

const Skills = () => {

  interface SkillCard {
    name: string;
    category: string;
  }

  const skillCards: SkillCard[] = [
    { name: "Spring Boot", category: "backend" },
    { name: "Java", category: "language" },
    { name: "TypeScript", category: "language" },
    { name: "JavaScript", category: "language" },
    { name: "Python", category: "language" },
    { name: "React", category: "frontend" },
    { name: "Angular", category: "frontend" },
    { name: "Jenkins", category: "devops" },
    { name: "Groovy", category: "devops" },
    { name: "GitHub Actions", category: "devops" },
    { name: "Docker", category: "devops" },
    { name: "HTML", category: "language" },
    { name: "CSS", category: "language" },
    { name: "Kotlin", category: "language" },
    { name: "JUnit", category: "tool" },
    { name: "Mockito", category: "tool" },
    { name: "Git", category: "tool" },
    { name: "GitHub", category: "tool" },
    { name: "GitLab", category: "tool" },
    { name: "Gradle", category: "tool" },
    { name: "Maven", category: "tool" },
    { name: "Postman", category: "tool" },
    { name: "Insomnia", category: "tool" },
    { name: "NumPy", category: "tool" },
    { name: "TailwindCSS", category: "frontend" },
    { name: "Angular Material", category: "frontend" },
    { name: "Bootstrap", category: "frontend" },
    { name: "Oracle SQL", category: "backend" },
    { name: "PostgreSQL", category: "backend" },
    { name: "MySQL", category: "backend" },
    { name: "SQL", category: "language" }
  ];

  const titleCards: SkillCard[] = [
    { name: "Languages", category: "language" },
    { name: "Frontend", category: "frontend" },
    { name: "Backend", category: "backend" },
    { name: "DevOps", category: "devops" },
    { name: "Tools", category: "tool" },
  ]

  const [skill, setSkill] = useState('');

  const filteredSkillCard = skillCards.filter(
    card => {
      if (skill === '') {
        return true
      }
      return card.category === skill
    }
  )

  const handleSkillSelect = (selectedSkill: string) => {
    if (selectedSkill === skill) {
      setSkill('')
      return;
    }

    setSkill(selectedSkill);
  }

  return (
    <section className="w-screen" id="skills">
      <div className="pt-36 pb-36 pl-4 pr-4 flex justify-center w-screen">
        <div className="flex h-screen flex-col justify-center items-center w-screen">
          <h1 className="lg:text-6xl md:text-4xl sm:text-2xl p-4">Skills</h1>
          <div className="sm:h-1/5 border-4 rounded border-neutral flex items-center sm:justify-between w-4/5 sm:p-6 pl:4 overflow-x-scroll h-auto min-h-1/5" id="stack">
            {titleCards.map(({ name, category }) => (
              <SkillCard key={name} name={name} category={category} onSkillSelect={handleSkillSelect} selectedSkill={skill} />
            ))}
          </div>
          <div className="p-3"></div>
          <div className="border-4 rounded border-neutral flex items-start flex-wrap p-4 content-start h-auto overflow-scroll w-4/5" id="tech">
            {shuffleArray(filteredSkillCard).map(({ name, category }) => (
              <SkillCard key={name} name={name} category={category} onSkillSelect={handleSkillSelect} selectedSkill="" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
import { useState } from "react";
import SkillCard from "../ui/SkillCard";

const Skills = () => {

  interface SkillCard {
    name: string;
    category: string[];
  }

  const skillCards: SkillCard[] = [
    { name: "Spring Boot", category: ["backend"] },
    { name: "Java", category: ["language", "backend"] },
    { name: "TypeScript", category: ["language", "frontend"] },
    { name: "JavaScript", category: ["language", "frontend"] },
    { name: "Python", category: ["language"] },
    { name: "React", category: ["frontend"] },
    { name: "Angular", category: ["frontend"] },
    { name: "Groovy", category: ["backend"] },
    { name: "GitHub Actions", category: ["backend"] },
    { name: "Docker", category: ["backend"] },
    { name: "HTML", category: ["language", "frontend"] },
    { name: "CSS", category: ["language", "frontend"] },
    { name: "Kotlin", category: ["language", "backend"] },
    { name: "JUnit", category: ["tool", "backend"] },
    { name: "Mockito", category: ["tool", "backend"] },
    { name: "Git", category: ["tool"] },
    { name: "GitHub", category: ["tool"] },
    { name: "GitLab", category: ["tool"] },
    { name: "Gradle", category: ["tool"] },
    { name: "Maven", category: ["tool", "backend"] },
    { name: "Postman", category: ["tool"] },
    { name: "Insomnia", category: ["tool"] },
    { name: "NumPy", category: ["tool"] },
    { name: "TailwindCSS", category: ["frontend"] },
    { name: "Angular Material", category: ["frontend"] },
    { name: "Bootstrap", category: ["frontend"] },
    { name: "IntelliJ", category: ["tool"] },
    { name: "VSCode", category: ["tool"] },
    { name: "Oracle SQL", category: ["database"] },
    { name: "PostgreSQL", category: ["database"] },
    { name: "Hibernate", category: ["database", "backend"] },
    { name: "JDBC", category: ["database", "backend"] },
    { name: "MySQL", category: ["database"] },
    { name: "SQL", category: ["language"] },
    { name: "Jenkins", category: ["backend"] },
  ];

  const titleCards: SkillCard[] = [
    { name: "Languages", category: ["language"] },
    { name: "Frontend", category: ["frontend"] },
    { name: "Backend", category: ["backend"] },
    { name: "Database", category: ["database"] },
    { name: "Tools", category: ["tool"] },
  ]

  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredSkillCards = skillCards.filter(
    card => {
      if (selectedCategory === '') {
        return true
      }
      return card.category.includes(selectedCategory)
    }
  )

  const handleCategorySelect = (category: string) => {
    console.log(selectedCategory)
    setSelectedCategory(category === selectedCategory ? '' : category);
  };

  return (
    <section className="w-screen" id="skills">
      <div className="pt-36 pb-36 pl-4 pr-4 flex justify-center w-screen">
        <div className="flex h-screen flex-col justify-center items-center w-screen">
          <h1 className="lg:text-6xl md:text-4xl sm:text-2xl p-4">Skills</h1>
          <div className="sm:h-1/5 border-4 rounded border-secondary flex items-center sm:justify-between w-4/5 sm:p-6 pl:4 overflow-x-scroll h-auto min-h-1/5" id="stack">
            {titleCards.map(({ name, category }) => (
              <SkillCard key={name} name={name} category={category} onSkillSelect={handleCategorySelect} selectedCategory={selectedCategory} />
            ))}
          </div>
          <div className="p-3"></div>
          <div className="border-4 rounded border-secondary flex items-start flex-wrap p-4 content-start h-auto overflow-scroll w-4/5" id="tech">
            {shuffleArray(filteredSkillCards).map(({ name, category }) => (
              <SkillCard key={name} name={name} category={category} onSkillSelect={handleCategorySelect} selectedCategory="" />
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
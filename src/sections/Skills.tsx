import { useState } from "react";
import { motion, Variants } from "framer-motion";
import SkillCard from "../ui/SkillCard";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.03 } }
}

const cardItem: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.15, ease: 'easeOut' } }
}

const Skills = () => {

  interface SkillCard {
    name: string;
    category: string[];
  }

  const skillCards: SkillCard[] = [
  // Core Languages
  { name: "Java", category: ["language", "backend"] },
  { name: "Python", category: ["language", "backend"] },
  { name: "TypeScript", category: ["language", "frontend"] },
  { name: "JavaScript", category: ["language", "frontend"] },
  { name: "SQL", category: ["language", "database"] },
  { name: "Groovy", category: ["language", "backend"] },

  // Backend Frameworks & Tools
  { name: "Spring Boot", category: ["backend"] },
  { name: "AWS Lambda", category: ["backend", "cloud"] },
  { name: "Terraform", category: ["backend", "cloud", "tool"] },
  { name: "Docker", category: ["backend", "tool"] },
  { name: "Jenkins", category: ["backend", "tool"] },
  { name: "GitHub Actions", category: ["backend", "tool"] },
  { name: "Maven", category: ["backend", "tool"] },

  // Frontend
  { name: "React", category: ["frontend"] },
  { name: "Angular", category: ["frontend"] },
  { name: "HTML", category: ["language", "frontend"] },
  { name: "CSS", category: ["language", "frontend"] },

  // Data & Cloud Platforms
  { name: "Snowflake", category: ["database", "cloud"] },
  { name: "AWS", category: ["cloud"] },
  { name: "AWS IAM", category: ["cloud"] },
  { name: "PostgreSQL", category: ["database"] },
  { name: "MySQL", category: ["database"] },

  // AI/ML
  { name: "Amazon Bedrock", category: ["cloud", "tool"] },
  { name: "RAG", category: ["tool"] },
  { name: "MCP", category: ["tool"] },

  // Monitoring & Observability
  { name: "CloudWatch", category: ["tool", "cloud"] },
  { name: "New Relic", category: ["tool"] },

  // Development Tools
  { name: "Git", category: ["tool"] },
  { name: "GitHub", category: ["tool"] },
  { name: "Postman", category: ["tool"] },
  { name: "JUnit", category: ["tool", "backend"] },
  { name: "Mockito", category: ["tool", "backend"] },
];

  const titleCards: SkillCard[] = [
    { name: "Languages", category: ["language"] },
    { name: "Frontend", category: ["frontend"] },
    { name: "Backend", category: ["backend"] },
    { name: "Database", category: ["database"] },
    { name: "Tools", category: ["tool"] },
    { name: "Cloud", category: ["cloud"] },
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
      <div className="pl-4 pr-4 flex justify-center w-screen">
        <div className="flex h-screen flex-col justify-center items-center w-screen">
          <motion.h1 className="lg:text-6xl md:text-4xl sm:text-2xl p-4 text-base-content" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>Skills</motion.h1>
          <motion.div className="sm:h-1/5 border-4 rounded border-neutral-content flex items-center sm:justify-between w-4/5 sm:p-6 pl:4 overflow-x-scroll h-auto min-h-1/5" id="stack" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {titleCards.map(({ name, category }) => (
              <motion.div key={name} variants={cardItem}>
                <SkillCard name={name} category={category} onSkillSelect={handleCategorySelect} selectedCategory={selectedCategory} />
              </motion.div>
            ))}
          </motion.div>
          <div className="p-3"></div>
          <motion.div className="border-4 rounded border-neutral-content flex items-start flex-wrap p-4 content-start h-auto overflow-scroll w-4/5" id="tech" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {shuffleArray(filteredSkillCards).map(({ name, category }) => (
              <motion.div key={name} variants={cardItem}>
                <SkillCard name={name} category={category} onSkillSelect={handleCategorySelect} selectedCategory="" />
              </motion.div>
            ))}
          </motion.div>
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
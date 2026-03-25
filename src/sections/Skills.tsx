import { useState, useMemo } from "react";
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
  visible: { opacity: 1, scale: 1, transition: { duration: 0.15, ease: 'easeOut' } },
}

interface SkillCardData {
  name: string;
  category: string[];
}

const skillCards: SkillCardData[] = [
  { name: "Java", category: ["language", "backend"] },
  { name: "Python", category: ["language", "backend"] },
  { name: "TypeScript", category: ["language", "frontend"] },
  { name: "JavaScript", category: ["language", "frontend"] },
  { name: "SQL", category: ["language", "database"] },
  { name: "Groovy", category: ["language", "backend"] },
  { name: "Spring Boot", category: ["backend"] },
  { name: "AWS Lambda", category: ["backend", "cloud"] },
  { name: "Terraform", category: ["backend", "cloud", "tool"] },
  { name: "Docker", category: ["backend", "tool"] },
  { name: "Jenkins", category: ["backend", "tool"] },
  { name: "GitHub Actions", category: ["backend", "tool"] },
  { name: "Maven", category: ["backend", "tool"] },
  { name: "React", category: ["frontend"] },
  { name: "Angular", category: ["frontend"] },
  { name: "HTML", category: ["language", "frontend"] },
  { name: "CSS", category: ["language", "frontend"] },
  { name: "Snowflake", category: ["database", "cloud"] },
  { name: "AWS", category: ["cloud"] },
  { name: "AWS IAM", category: ["cloud"] },
  { name: "PostgreSQL", category: ["database"] },
  { name: "MySQL", category: ["database"] },
  { name: "Amazon Bedrock", category: ["cloud", "tool"] },
  { name: "RAG", category: ["tool"] },
  { name: "MCP", category: ["tool"] },
  { name: "CloudWatch", category: ["tool", "cloud"] },
  { name: "New Relic", category: ["tool"] },
  { name: "Git", category: ["tool"] },
  { name: "GitHub", category: ["tool"] },
  { name: "Postman", category: ["tool"] },
  { name: "JUnit", category: ["tool", "backend"] },
  { name: "Mockito", category: ["tool", "backend"] },
];

const titleCards: SkillCardData[] = [
  { name: "Languages", category: ["language"] },
  { name: "Frontend", category: ["frontend"] },
  { name: "Backend", category: ["backend"] },
  { name: "Database", category: ["database"] },
  { name: "Tools", category: ["tool"] },
  { name: "Cloud", category: ["cloud"] },
];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const shuffledSkillCards = useMemo(() => {
    const arr = [...skillCards];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, []);

  const displayedCards = selectedCategory === ''
    ? shuffledSkillCards
    : [
        ...shuffledSkillCards.filter(c => c.category.includes(selectedCategory)),
        ...shuffledSkillCards.filter(c => !c.category.includes(selectedCategory)),
      ];

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(prev => prev === category ? '' : category);
  };

  return (
    <section className="w-full py-16" id="skills">
      <div className="flex flex-col items-center px-4">
        <motion.div className="flex flex-col items-center mb-6" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h1 className="text-3xl sm:text-4xl font-bold text-base-content">Skills</h1>
          <div className="w-12 h-1 bg-primary rounded mt-2" />
        </motion.div>
        <motion.div className="flex flex-wrap justify-center w-full max-w-4xl border border-base-content/15 rounded-2xl p-4 gap-1" id="stack" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {titleCards.map(({ name, category }) => (
            <motion.div key={name} variants={cardItem}>
              <SkillCard name={name} category={category} onSkillSelect={handleCategorySelect} selectedCategory={selectedCategory} />
            </motion.div>
          ))}
        </motion.div>
        <div className="p-3"></div>
        <motion.div className="flex flex-wrap w-full max-w-4xl border border-base-content/15 rounded-2xl p-4" id="tech" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {displayedCards.map(({ name, category }) => {
            const dimmed = selectedCategory !== '' && !category.includes(selectedCategory);
            return (
              <motion.div key={name} variants={cardItem} layout transition={{ layout: { duration: 0.2, ease: 'easeOut' } }}>
                <motion.div animate={{ opacity: dimmed ? 0.2 : 1 }} transition={{ duration: 0.15 }}>
                  <SkillCard name={name} category={category} onSkillSelect={handleCategorySelect} selectedCategory="" />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;

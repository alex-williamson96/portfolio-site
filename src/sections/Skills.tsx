import SkillCard from "../ui/SkillCard";

const Skills = () => {

  return (
    <section className="pt-36 pb-36 pl-4 pr-4 flex items-center" id='skills'>
      <div className="flex h-screen flex-col w-fit">
        <div className="h-1/5 border rounded border-neutral flex items-center">
          <SkillCard name="Front End" category="frontend" />
          <SkillCard name="Back End" category="backend" />
          <SkillCard name="Dev Ops" category="devops" />
          <SkillCard name="Tools" category="tools" />
        </div>
        <div className="p-2">

        </div>
        <div className="h-4/5 border rounded border-neutral flex items-start">
        <SkillCard name="Tools" category="tools" />
        <SkillCard name="Tools" category="tools" />
        <SkillCard name="Tools" category="tools" />
        <SkillCard name="Tools" category="tools" />
        <SkillCard name="Tools" category="tools" />
        </div>
      </div>
    </section>
  )
}

export default Skills;
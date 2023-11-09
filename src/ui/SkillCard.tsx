const SkillCard = (props: { name: string, category: string, onSkillSelect: (category: string) => void, selectedSkill: string}) => {

  const defaultStyles = 'flex justify-center items-center p-3 sm:p-6  border-neutral bg-primary hover:bg-primary-focus text-primary-content border-2 sm:text-3xl rounded-lg text-lg'

  return (
    <div className="p-2 flex w-fit">
      <div onClick={() => props.onSkillSelect(props.category)} className={props.selectedSkill !== props.category ? defaultStyles : defaultStyles + ' bg-primary-focus'}>
        {props.name}
      </div>
    </div>

  )
}

export default SkillCard;
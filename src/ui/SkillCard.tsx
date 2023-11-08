const SkillCard = (props: { name: string, category: string, onSkillSelect: (category: string) => void }) => {

  const handleClick = () => {
    props.onSkillSelect(props.category)
  }

  return (
    <div className="p-2 flex w-fit">
      <div onClick={handleClick} className="flex justify-center items-center p-3 sm:p-6  border-neutral bg-primary hover:bg-primary-focus text-neutral-focus border-2 sm:text-3xl rounded-lg text-lg">
        {props.name}
      </div>
    </div>

  )
}

export default SkillCard;
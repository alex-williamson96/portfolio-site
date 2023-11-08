const SkillCard = (props: { name: string, category: string }) => {
  console.log(props.name)
  console.log(props.category)

  return (
    <div className="p-2 flex">
      <div className="flex justify-center items-center p-6 border-neutral bg-secondary text-neutral-focus border-2 text-3xl rounded-lg">
        <div className="flex">
          {props.name}
        </div>
      </div>
    </div>

  )
}

export default SkillCard;
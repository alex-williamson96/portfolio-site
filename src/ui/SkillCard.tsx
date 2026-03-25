const SkillCard = (props: { name: string, category: string[], onSkillSelect: (category: string) => void, selectedCategory: string }) => {
  const isSelected = props.selectedCategory !== '' && props.category.includes(props.selectedCategory);
  const base = 'flex justify-center items-center px-6 py-4 bg-base-200 rounded-xl text-2xl sm:text-3xl shadow-md transition-all cursor-pointer';
  const state = isSelected
    ? 'text-primary shadow-lg scale-105'
    : 'text-base-content hover:shadow-lg hover:scale-105';

  return (
    <div className="p-1 flex h-full">
      <div tabIndex={0} role="button" onClick={() => props.onSkillSelect(props.category[0])} className={`${base} ${state} w-full`}>
        {props.name}
      </div>
    </div>
  )
}

export default SkillCard;
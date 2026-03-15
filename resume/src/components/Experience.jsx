import ExperienceField from "./ExperienceField"

export default function Experience({ experience }) {
  if (!experience?.length) return null

  return (
    <section>
      <h2 className="text-[19px]">Experience</h2>
      <hr className='mb-2'></hr>

      <ExperienceField experience={experience} />
    </section>
  )
}
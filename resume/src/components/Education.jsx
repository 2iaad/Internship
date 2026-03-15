import EducationField from "./EducationField"

export default function Education({ education }) {
  if (!education?.length) return null

  return (
    <section>
      <h2 className="text-[19px]">Education</h2>
      <hr className='mb-2'></hr>

      <EducationField education={education} />
    </section>
  )
}
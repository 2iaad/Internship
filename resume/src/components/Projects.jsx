import ProjectsField from "./ProjectsField"

export default function Projects({ projects }) {
  if (!projects?.length) return null

  return (
    <section>
      <h2 className="text-[19px]">Relevant Experience</h2>
      <hr className='mb-2'></hr>

      <div className="space-y-1">
        <ProjectsField projects={projects} />
      </div>
    </section>
  )
}
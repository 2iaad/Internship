export default function Summary({ summary }) {
  if (!summary?.trim()) return null

  return (
    <section>
      <h2 className="text-[19px]">Professional Summary</h2>
      <hr className='mb-2'></hr>

      <p className="text-gray-700 mx-5">
        {summary}
      </p>
    </section>
  )
}


export default function EducationField() {
	const obj = [
		{
			degree: "Computer Science",
			duration: "Novemeber 2023 – February 2026",
			school: "1337 Coding School – Khouribga"
		},
		{
			degree: "English Studies",
			duration: "October 2021 – May 2023",
			school: "American Language Center - Mohammedia"
		},
		{
			degree: "Baccalaureate in Physical Sciences",
			duration: "September 2020 – June 2021",
			school: "Sharif El Idrissi High School - Benslimane"
		}]

	const toRender = obj.map((item) => {
		return (
			<div>
				<div className="flex justify-between">
					<h3 className="font-semibold"> {item.school} </h3>
					<p className="text-gray-600 text-sm"> {item.duration} </p>
				</div>
				<p className="text-gray-600 text-m"> {item.degree} </p>
			</div>
		)
	})

	return (
		<div className="space-y-2">
			{toRender}
		</div>
	)
}
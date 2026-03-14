import { useState } from "react"

export default function ProjectsField() {

	const projects = [
		{
			title: "Leets",
			tech: "TypeScript, Express, React, Next.js, Tailwind, WebSockets",
			description: "Block-based writing tool with embedded chat combining documentation, collaboration, and blogging in one seamless experience.",
		},
		{
			title: "Inception",
			tech: "Docker, Docker Compose",
			description:
				"Deployed a multi-service web app with Docker, Nginx, MySQL, and WordPress managing containers, service communication, and SSL security."
		},
		{
			title: "HTTP Server",
			tech: "C++, Sockets",
			description:
				"Developed an HTTP/1.1 web server in C++ from scratch that mimics NGINX behavior handling multiple client requests and serving static and dynamic content."
		},
		{
			title: "Unix CLI",
			tech: "C, Bash",
			description:
				"Implemented a custom Unix shell supporting command execution, pipes, redirections, and built-in commands with reliable parsing and error handling."
		}
	];

	const toRender = projects.map((project, idx) => (
		<div key={idx}>
			<div className="flex justify-between items-center">
				<h3 className="text-lg font-semibold">{project.title}</h3>
				<p className="italic text-gray-500 text-sm"> {project.tech} </p>
			</div>
			<div className="flex">
				<p className="text-gray-700 ml-3"> - </p>
				<p className="text-gray-700 ml-2">{project.description} </p>
			</div>
		</div>
	))

	return (
		<>
			{toRender}
		</>
	);
}
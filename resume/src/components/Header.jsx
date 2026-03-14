import { useState } from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Header() {
  const [name, setName] = useState("Ziyad Derfoufi")
  const [title, setTitle] = useState("Junior Software Engineer")

  const [phone, setPhone] = useState("+212 697 91 48 07")
  const [email, setEmail] = useState("ziyad@zderfoufi.dev")
  const [linkedin, setLinkedin] = useState("ziyadderfoufi")
  const [github, setgithub] = useState("2iaad")

  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="text-3xl font-bold">{name}</h1>
      <p className="text-gray-600">{title}</p>

      <div className="flex gap-2 text-sm text-gray-500">
        <a
          href="mailto:ziyad@zderfoufi.dev"
          className="underline"
          target="_blank"
        >
          <p>{email}</p>
        </a>
        |
        <p>{phone}</p>
        |
        <a
          href="https://www.linkedin.com/in/ziyadderfoufi/"
          className="flex justify-center underline items-center gap-1"
          target="_blank"
        >
          <FaLinkedin className='text-blue-600' /> {linkedin}
        </a>
        |
        <a
          href="https://www.github.com/2iaad"
          className="flex justify-center underline items-center gap-1 "
          target="_blank"
        >
          <FaGithub className='text-gray-600' /> {github}
        </a>
      </div>
    </div>
  )
}
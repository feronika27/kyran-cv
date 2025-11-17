import { useEffect, useState } from "react"
import RestAPI from "../RestAPI"

const Skills = () => {
  const [skills, setSkills] = useState([])

  useEffect(() => {
    const getSkills = async () => {
      try {
        const res = await RestAPI.get("/skills")
        setSkills(res.data)
      } catch (err) {
        console.error(err)
      }
    }
    getSkills()
  }, [])

  return (
    <section id="skills">
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map(s => (
          <span key={s.name} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
            {s.name} • {s.level}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Skills

import { useEffect, useState } from "react"
import RestAPI from "../RestAPI"

const Projects = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const getProjects = async () => {
      try {
        const res = await RestAPI.get("/projects")
        setProjects(res.data)
      } catch (err) {
        console.error(err)
      }
    }
    getProjects()
  }, [])

  return (
    <section id="projects">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((p, i) => (
          <div key={i} className="p-4 bg-white rounded shadow hover:shadow-md transition">
            <p className="font-semibold">{p.name}</p>
            <p className="text-gray-700">{p.desc}</p>
            {/* kalau mau tampilkan gambar project dari public: */}
            {p.image && (
              <img
                src={p.image}
                alt={p.name}
                className="mt-2 rounded"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

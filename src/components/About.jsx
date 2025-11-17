import { useEffect, useState } from "react"
import RestAPI from "../RestAPI"

const About = () => {
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    const getProfile = async () => {
      try {
        const res = await RestAPI.get("/profile")
        setProfile(res.data)
      } catch (err) {
        console.error(err)
      }
    }
    getProfile()
  }, [])

  if (!profile) return <p>Loading...</p>

  return (
    <section id="about" className="flex flex-col md:flex-row items-center gap-6">
      <img
        src={profile.foto}
        alt={profile.name}
        className="w-32 h-32 rounded-full ring-2 ring-blue-600 object-cover"
      />
      <div>
        <h2 className="text-2xl font-semibold mb-2">{profile.name}</h2>
        <p className="text-blue-600 font-medium">{profile.title}</p>
        <p className="mt-2 text-gray-700">{profile.summary}</p>
        <p className="mt-1 text-sm text-gray-500">{profile.location}</p>
      </div>
    </section>
  )
}

export default About

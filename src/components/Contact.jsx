import { useEffect, useState } from "react"
import RestAPI from "../RestAPI"

const Contact = () => {
  const [contact, setContact] = useState(null)

  useEffect(() => {
    const getContact = async () => {
      try {
        const res = await RestAPI.get("/contact")
        setContact(res.data)
      } catch (err) {
        console.error(err)
      }
    }
    getContact()
  }, [])

  if (!contact) return <p>Loading...</p>

  return (
    <section id="contact">
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>
      <p className="text-gray-700">Email: {contact.email}</p>
      <p className="text-gray-700">Phone: {contact.phone}</p>
    </section>
  )
}

export default Contact

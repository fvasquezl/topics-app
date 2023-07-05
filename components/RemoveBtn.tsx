"use client"
import { HiOutlineTrash } from "react-icons/hi"
import { useRouter } from "next/navigation"

interface MyIdProps {
	id: String
}


const RemoveBtn = ({ id }: MyIdProps) => {

	const router = useRouter()

	const removeTopic = async () => {
		const confirmed = confirm("Are you sure you want to remove")
		
		if (confirmed) {
			const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
				method: "DELETE",
			})
			
			if (res.ok) {
				router.refresh()
			}
		}
	}
	return (
		<button onClick={removeTopic} className="text-red-500">
			<HiOutlineTrash size={24} />
		</button>
	)
}

export default RemoveBtn
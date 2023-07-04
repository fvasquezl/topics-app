import connectMongoDB from "@/libs/mongodb"
import Topic from "@/models/topics"
import { NextRequest, NextResponse } from "next/server"


export async function POST(request: NextRequest) {

	const { title, description } = await request.json()
	await connectMongoDB()
	await Topic.create({ title, description })
	return NextResponse.json({ message: "Topic Created" }, { status: 201 })
}

export async function GET() {
	try {
		await connectMongoDB()
		const topics = await Topic.find()
		return NextResponse.json(topics, { status: 200 })
	}
	catch (error) {
		return new Response('Failed to fetch all prompts', { status: 500 })
	}


}


export async function DELETE(request: NextRequest) {
	const id = request.nextUrl.searchParams.get("id")
	await connectMongoDB()
	await Topic.findByIdAndDelete(id)
	return NextResponse.json({ message: "Topic Deleted" }, { status: 200 })
}

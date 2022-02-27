import { collection, getDocs } from "firebase/firestore"
import { db } from "../../firebase"

import type { NextApiRequest, NextApiResponse } from "next"

type Data = {}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const snapshot = await getDocs(collection(db, "/posts"))
  const posts: any[] = []
  await snapshot.forEach(post => posts.push({ id: post.id, data: post.data() }))

  res.status(200).json(posts)
}

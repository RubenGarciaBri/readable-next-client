import { collection, doc, getDoc, setDoc, getDocs } from "firebase/firestore"
import { db } from "../../../firebase"

import type { NextApiRequest, NextApiResponse } from "next"

type Data = {}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const snapshot = await getDocs(collection(db, "posts"))
      const posts: any[] = []
      await snapshot.forEach(post => {
        const data = post.data()
        posts.push({
          ...data,
          id: post.id,
        })
      })

      return res.status(200).json(posts)
    } catch (error: any) {
      return res
        .status(403)
        .json({ errorCode: error.code, errorMessage: error.message })
    }
  }
}

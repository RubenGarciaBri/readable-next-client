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
      const snapshot = await getDocs(collection(db, "likes"))
      const likes: any[] = []
      await snapshot.forEach(like => {
        const data = like.data()
        likes.push(data)
      })

      return res.status(200).json(likes)
    } catch (error: any) {
      return res
        .status(403)
        .json({ errorCode: error.code, errorMessage: error.message })
    }
  }
}

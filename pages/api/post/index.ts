import { uuid } from "uuidv4"
import { collection, doc, getDoc, setDoc, getDocs } from "firebase/firestore"
import { db } from "../../../firebase"

import type { NextApiRequest, NextApiResponse } from "next"

type Data = {}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const id = uuid()
    const post = { ...req.body, id }
    try {
      await setDoc(doc(db, "posts", id), post)

      return res.status(200).json({ id, data: post })
    } catch (error: any) {
      return res
        .status(403)
        .json({ errorCode: error.code, errorMessage: error.message })
    }
  }
}

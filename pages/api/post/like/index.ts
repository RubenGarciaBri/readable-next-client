import { uuid } from "uuidv4"
import { collection, doc, getDoc, setDoc, deleteDoc } from "firebase/firestore"
import { db } from "../../../../firebase"

import type { NextApiRequest, NextApiResponse } from "next"
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript"

type Data = {}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { postId, email } = req.body

    try {
      const docRef = doc(db, "posts", postId)
      const docSnap = await getDoc(docRef)

      if (!docSnap.exists()) {
        return res.status(400).json({ errorMessage: "Post doesn't exist" })
      }

      const data = docSnap.data()

      const likeId = uuid()
      const like = {
        likeId: likeId,
        postId,
        email,
      }

      // Create like
      await setDoc(doc(db, "likes", likeId), like)

      // Add like id in post
      await setDoc(doc(db, "posts", postId), {
        ...data,
        likeIds: [...data.likeIds, likeId],
      })

      return res.status(200).json(like)
    } catch (error: any) {
      return res
        .status(403)
        .json({ errorCode: error.code, errorMessage: error.message })
    }
  }

  if (req.method === "DELETE") {
    const { postId, likeId } = req.body

    try {
      const postDocRef = doc(db, "posts", postId)
      const postDocSnap = await getDoc(postDocRef)

      if (!postDocSnap.exists()) {
        return res.status(400).json({ errorMessage: "Post doesn't exist" })
      }

      const postData = postDocSnap.data()

      const likeDocRef = doc(db, "likes", likeId)
      const likeDocSnap = await getDoc(likeDocRef)

      if (!likeDocSnap.exists()) {
        return res.status(400).json({ errorMessage: "Like doesn't exist" })
      }

      const likeData = postDocSnap.data()

      // Delete like
      await deleteDoc(doc(db, "likes", likeId))

      // Delete like id from post
      await setDoc(doc(db, "posts", postId), {
        ...postData,
        likeIds: postData.likeIds.filter((id: string) => id !== likeId),
      })

      return res.status(200).json(likeData)
    } catch (error: any) {
      return res
        .status(403)
        .json({ errorCode: error.code, errorMessage: error.message })
    }
  }
}

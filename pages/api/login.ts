import { signInWithEmailAndPassword } from "firebase/auth"
import { collection, doc, getDoc, setDoc } from "firebase/firestore"
import { auth, db } from "../../firebase"

import type { NextApiRequest, NextApiResponse } from "next"

type Data = {}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password } = req.body

  try {
    const userData = await signInWithEmailAndPassword(auth, email, password)
    const idToken = await userData.user.getIdToken()

    const docRef = doc(db, "users", email)
    const docSnap = await getDoc(docRef)
    const data = docSnap.data()

    if (!docSnap.exists()) {
      return res.status(400).json({ errorMessage: "User doesn't exist" })
    }

    return res.status(200).json({ idToken, userName: data?.userName })
  } catch (error: any) {
    return res
      .status(403)
      .json({ errorCode: error.code, errorMessage: error.message })
  }
}

import { createUserWithEmailAndPassword } from "firebase/auth"
import { collection, doc, getDoc, setDoc } from "firebase/firestore"
import { auth, db, firebaseConfig } from "../../firebase"

import type { NextApiRequest, NextApiResponse } from "next"

type Data = {}
type FBError = {
  code: string
  message: string
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password, userName } = req.body

  try {
    const docRef = doc(db, "users", email)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      return res.status(400).json({ error: "User already exists" })
    }

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )

    const user = userCredential.user
    const userId = user.uid
    const idToken = await user.getIdToken()

    const emptyImg = "blankAvatar.png"

    const userData = {
      userName: userName,
      email: email,
      createdAt: new Date().toISOString(),
      // imageUrl: `https://firebasestorage.googleapis.com/v0/b/${firebaseConfig.storageBucket}/o/${emptyImg}?alt=media`,
      userId,
      bio: "Hey there!",
      location: "",
    }

    // Add new user to the database
    await setDoc(doc(db, "users", email), userData)

    return res.status(201).json({ userName, idToken })
  } catch (error: any) {
    const errorCode = error.code
    const errorMessage = error.message
    return res.status(500).json({ errorCode, errorMessage })
  }
}

import { NextApiRequest, NextApiResponse } from "next";
import db from "@/libs/firebase";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == "POST") {
    const dbRef = db.ref("posts/views").child(req.query.slug as string);
    try {
      const { snapshot } = await dbRef.transaction((currentViews) => {
        if (currentViews === null) {
          return 1;
        }

        return currentViews + 1;
      });
      return res.status(200).json({
        total: snapshot.val(),
      });
    } catch (error) {
      console.error("Error al procesar la solicitud:", error);
      return res.status(500).json({ error: "Error interno del servidor" });
    }
  }

  try {
    const snapshot = await db
      .ref("posts/views")
      .child(req.query.slug as string)
      .once("value");

    const views = snapshot.val();
    return res.status(200).json({ total: views });
  } catch (error) {
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

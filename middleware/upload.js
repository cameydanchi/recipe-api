import multer from "multer";

export const localUpload = multer({dest:'uploads'})
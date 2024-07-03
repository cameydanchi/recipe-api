import multer from "multer";
import 'dotenv/config';
import { multerSaveFilesOrg } from "multer-savefilesorg";

export const localUpload = multer({dest:'uploads'})
export const remoteUploads = multer ({
    storage:multerSaveFilesOrg({
        apiAccessToken: process.env.SAVEFILESORG_API_KEY,
        relativePath: '/uploads/*'
    })
})
import { Request } from 'express'

export const fileFilter = (req: Request, file: Express.Multer.File, callback: (error: Error | null, acceptFile: boolean) => void) => {
    const mimeTypeAllowed =  ['image/png', 'image/jpeg', 'image/gif'];
    
    
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/) || mimeTypeAllowed.indexOf(file.mimetype) >= 0) {
        callback(null, true);
    } else{
        callback(new Error('Somente imagens são permitidas'), false);

    }
    
}
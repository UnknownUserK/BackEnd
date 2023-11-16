import multer from 'multer'

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public')
    },

    filename: function(req,file, cb) {
        cb(null, file.filename)
    },
});

export const loader = multer({ storage });
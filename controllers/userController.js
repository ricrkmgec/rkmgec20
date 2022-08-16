import multer from "multer";
import multerS3 from 'multer-s3'
import aws from 'aws-sdk'
const s3=new aws.S3({
    accessKeyId:process.env.SECRET_KEY,
    secretAccessKey:process.envSECRET_ACCESS_KEY,
    region:process.env.BUCKET_REGION
})

const upload=(bucketName)=>
multer({
    storage:multerS3({
        s3,
        bucket:bucketName,
        metadata:function(req,file,cb){
            cb(null,{fieldName:file.fieldname});
        },
        key:function(req,res,cb){
        cb(null,"image.jpeg");
        },
    }),
})

exports.setprofilepic=(req,res,next)=>{
    console.log(req.files)
    const uploadSingle=upload("rkmgec").single("image-upload");
    uploadSingle(req,res,(err)=>{
        if(err)return res.status(400).json({success:false,message:err.message});
    })
    req.status(200).json({data:req.files});
}
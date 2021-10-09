const imagePreview = document.getElementById('img-prev')

const imageUploader = document.getElementById('img-uploader')

const CLOUDINARY = 'https://api.cloudinary.com/v1_1/dcakvkbpz/image/upload'

const Cloudinary_preset = 'vn5lewjj'

imageUploader.addEventListener('change', async (event) => {
   const file = event.target.files[0]
   const formData = new FormData() 
   formData.append('file', file)
   formData.append('upload_preset', Cloudinary_preset)

    const res = await axios.post(CLOUDINARY, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
    })
    console.log(res)
    imagePreview.src = res.data.secure_url
})


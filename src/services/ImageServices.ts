import { cloudinaryUpload } from "./cloudinary";

export async function uploadImages(
  files: Express.Multer.File[],
  folder: string
) {
  if (!files || !Array.isArray(files) || files.length === 0)
    throw { message: "Images don't exist" };
  const uploads = await Promise.all(
    files.map((file) => cloudinaryUpload(file, folder))
  );
  return uploads.map((u) => ({ image_url: u.secure_url }));
}

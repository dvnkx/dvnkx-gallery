import z from "zod";

const maxFileSize = 5000000;
const acceptedImageFormat = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const imageSchema = z.object({
  name: z.string().min(1, { message: "Minimum 1 entity required." }),
  description: z.string().optional(),
  image: z
    .any()
    .refine((file) => file?.size <= maxFileSize, `Max image size is 5MB.`)
    .refine(
      (files) => acceptedImageFormat.includes(files?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
  category: z.string().optional(),
});

export default imageSchema;

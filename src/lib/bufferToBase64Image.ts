import sharp from "sharp";

export const bufferToBase64Image = async (buffer: Buffer) => {
  const imageBuffer = (await sharp(buffer).jpeg().toBuffer()).toString(
    "base64"
  );

  return "data:image/png;base64," + imageBuffer;
};

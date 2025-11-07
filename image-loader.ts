interface ImageLoaderParams {
  src: string;
  width: number;
  quality?: number;
}

export default function imageLoader({
  src,
  width,
  quality = 80,
}: ImageLoaderParams): string {
  // Use local images in development, CDN in production
  if (process.env.NODE_ENV === "development") {
    return src;
  }
  return `https://midday.ai/cdn-cgi/image/width=${width},quality=${quality}/${src}`;
}

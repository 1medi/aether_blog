export default function Video() {
  return (
    <video controls className="w-full aspect-video">
      <source src="/assets/blog/videos/aetherParaphrase.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

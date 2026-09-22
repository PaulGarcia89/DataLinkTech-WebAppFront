import Image from "next/image";
const sizes = {
  automate: [294, 111],
  develop: [244, 111],
  connect: [278, 111],
};
export function ServiceIllustration({
  kind,
}: {
  kind: "automate" | "develop" | "connect";
}) {
  return (
    <div className="service-illustration" aria-hidden="true">
      <Image
        src={`/images/illustration-${kind}.webp`}
        alt=""
        width={sizes[kind][0]}
        height={sizes[kind][1]}
      />
    </div>
  );
}

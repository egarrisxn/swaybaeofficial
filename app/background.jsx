import Image from "next/image";
import mountains from "../public/images/mountains.jpg";

export default function Background() {
  return (
    <Image
      src={mountains}
      alt="Mountains"
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: "cover",
      }}
    />
  );
}

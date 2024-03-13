import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Keep Track</h1>
      <Image src="/keeptrack.png" alt="Keep Track" width={500} height={500} />
    </div>
  );
}

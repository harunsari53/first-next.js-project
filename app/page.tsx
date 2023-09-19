import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>First Next.js Project</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  );
}

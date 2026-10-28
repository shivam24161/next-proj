import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>Merchant Management</h1>

      <nav>
        <Link href="/dashboard">Dashboard</Link>
        {" | "}
        <Link href="/merchants">Merchants</Link>
      </nav>
    </main>
  );
}
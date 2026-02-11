import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/create-appointment">
        <button>Go to Appointment page</button>
      </Link>
    </div>
  );
}

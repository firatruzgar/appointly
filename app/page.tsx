import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/create-appointment">
        <Button>Go to Appointment page</Button>
      </Link>
    </div>
  );
}

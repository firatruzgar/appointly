import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <div>
      <Link href="/appointments/new">
        <Button>Go to Appointment page</Button>
      </Link>
    </div>
  );
}

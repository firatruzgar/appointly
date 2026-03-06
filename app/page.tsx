import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/appointments/new">
        <Button>Go to Appointment page</Button>
      </Link>
    </div>
  );
}

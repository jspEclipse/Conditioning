import { Button } from "../components/ui/button"
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen min-w-full flex flex-col items-center justify-center">
      <div className="text-3xl">
        A Lesson in Conditioning
      </div>
      <div className="text-3xl">
        <Link href="/first">
          <Button variant="destructive">‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ </Button>
        </Link>
      </div>
    </div>
  );
}

import Paper from "../../components/paper"
import { Button } from "../../components/ui/button"
import Link from "next/link"
export default function Home() {
  return (
    <div className="min-h-screen min-w-full flex flex-col items-center justify-center z-10">
        <Paper/>
        <div className="flex mb-10 min-w-36 justify-between">
          <Link href="/">
            <Button variant="secondary" className="border-2">Back</Button>
          </Link>
          <Link href="/second">
            <Button>Next</Button>
          </Link>
        </div>
    </div>
  );
}

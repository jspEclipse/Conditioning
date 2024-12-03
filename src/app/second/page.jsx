import Paper2 from "../../components/paper2"
import { Button } from "../../components/ui/button"
import Link from "next/link"
export default function Home() {
  return (
    <div className="min-h-screen min-w-full flex flex-col items-center justify-center z-10">
        <Paper2/>
        <div className="flex mb-10 min-w-36 justify-center">
          <Link href="/first">
            <Button variant="secondary" className="border-2">Back</Button>
          </Link>
        </div>
    </div>
  );
}

import "./globals.css";
import ParallaxSquare from "../components/parallax";

export const metadata = {
  title: "Conditioning",
};

const red = "#fb4934";
const blue = "#83a598";
const green = "#b8bb26";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#fffce9]">
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <ParallaxSquare width={5} x={8} y={10} y2={20} color={green} />
            <ParallaxSquare width={7.5} x={5} y={40} y2={0} color={blue} />
            <ParallaxSquare width={10} x={15} y={40} y2={50} color={red} />
            <ParallaxSquare width={5} x={92} y={50} y2={50} color={red} />
            <ParallaxSquare width={7.5} x={95} y={20} y2={10} color={green} />
            <ParallaxSquare width={10} x={85} y={70} y2={0} color={blue} />
          </div>
        <div className="relative z-10 2xl:text-2xl">{children}</div>
      </body>
    </html>
  );
}


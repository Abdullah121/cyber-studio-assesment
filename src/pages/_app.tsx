import { Josefin_Sans } from "next/font/google";
import Head from "next/head";
import type { AppProps } from "next/app";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Cyber Studio Assessment</title>
        <link rel="icon" href="logo.png" />
      </Head>

<div className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col`}>

        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
            <Component {...pageProps} />
          </main>
        </div>
      </div>
    </>
  );
}

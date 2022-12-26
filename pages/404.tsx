import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function Custom404() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
      console.log("dipannggil setelah 2.5 detik");
    }, 2500);
  }, []);

  function backHome() {
    return (event: React.MouseEvent) => {
      router.push("/");
    };
  }

  return (
    <>
      <Head>
        <title>not found bro</title>
        <meta name="description" content="website NextJS Basic" />
      </Head>
      <div className="title_404">
        <h1>whooooooooopss.</h1>
        <h2>Page not found 505</h2>
        <p>
          {/* <Link className="return_home" href={"/"}>
      Home
    </Link> */}
          <i>auto redirect to home in 2second</i>
        </p>
        {/* <button onClick={backHome()}>Pulang ke home</button> */}
      </div>
    </>
  );
}

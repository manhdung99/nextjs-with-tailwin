import Head from "next/head";
import React from "react";

export default function About() {
  return (
      <>
      <Head>
        <title>About</title>
      </Head>
    <div>
      <h1 className="text-left text-4xl">About Page</h1>
      <p className="my-2.5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi
        impedit suscipit architecto, odio inventore nostrum non neque dicta.
        Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem
        nobis odit.
      </p>
      <p className="my-2.5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi
        impedit suscipit architecto, odio inventore nostrum non neque dicta.
        Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem
        nobis odit.
      </p>
    </div>
    </>
  );
}

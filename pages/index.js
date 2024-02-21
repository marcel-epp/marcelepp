// component import
import Header from "@/components/Header";
import StyledHero from "@/components/Hero";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <StyledHero />
      <h2>I am main...</h2>
      <Link href="/posts">Posts</Link>
    </>
  );
}

import HomeAnimated from "@/components/HomeAnimated";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Actrotech - Software Solutions Company",
  description: "Welcome to Actrotech, your partner in innovative software development and technology solutions.",
};

export default function Home() {
  return <HomeAnimated />;
}

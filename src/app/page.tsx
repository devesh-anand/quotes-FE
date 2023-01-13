// "use client";
import Image from "next/image";
import Container from "@/components/Container";
import ClientWrapper from "./ClientWrapper";

import * as THREE from "three";
//@ts-ignore
import HALO from "vanta/dist/vanta.halo.min";

export default function Home() {
   return (
      <ClientWrapper>
         {/* @ts-expect-error Server Component */}
         <Container />
      </ClientWrapper>
   );
}

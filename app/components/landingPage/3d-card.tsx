"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";

export function ThreeDCard() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[300px] md:w-[600px]  h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white text-center"
        >
          Unlock your creative potential
        </CardItem>

        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm  mt-2 dark:text-neutral-300"
        >
          Make your life easier one step at a time
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm  mt-2 dark:text-neutral-300"
        >
          Get your membership or stock up on some tokens and generate your own
          path towards success
        </CardItem>

        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/pp.jpg"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>

        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="/login"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Sign In
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href="/register"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import blockchainlogo from "@/images/blockchain.png"
import solanalogo from "@/images/solana.png"
import gamelogo from "@/images/game.png"
import weblogo from "@/images/web.png"
import reclaimlogo from "@/images/reclaim.png"
import logo from "../images/whiteDASHH.png"
const demoImages = [
  {
    src: blockchainlogo,
    alt: "Blockchain",
  },
  {
    src: solanalogo,
    alt: "Solana",
  },
  {
    src: gamelogo,
    alt: "Game",
  },
  {
    src: weblogo,
    alt: "Web",
  },
  {
    src: reclaimlogo,
    alt: "Reclaim",
  },
]

export function HeroSection() {
  return (
    <section className="  ">
      <div className="container relative  justify-center mx-auto px-4 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold tracking-tighter leading-tight sm:leading-none">
              <span className="bg-gradient-to-r from-[#ff9a9e] to-[#ff6b95] bg-clip-text text-transparent">
                Decentralized&nbsp;
              </span>
              <span className="bg-gradient-to-r from-[#ff6b95] to-[#a855f7] bg-clip-text text-transparent">
                Marketing&nbsp;
              </span>
              <span className="text-white">for</span>
              <br />
              <span className="text-white">a Global Audience</span>
            </h1>
            <div className="space-y-4">
              <p className="text-lg text-gray-300">
                DASHH is revolutionizing advertising by connecting brands with top-tier micro-influencers around the world. Our decentralized platform ensures that every influencer is fairly rewarded for genuine engagement, regardless of their location.
              </p>
              <p className="text-lg text-gray-300">
                {/* And you? You get unmatched transparency, real-time performance tracking, and access to the best engagement-driven talent in the industry, all powered by Solana’s blockchain technology. */}
              </p>
            </div>
            <div>
              <Button
                className="bg-gradient-to-r from-[#ff9a9e] to-[#a855f7] text-white hover:from-[#ff8a8e] hover:to-[#9645e6]"
                size="lg"
                asChild
              >
                <Link href="#">Connect Us</Link>
              </Button>
            </div>
          </div>
          <div className="relative">

            {/* purple gradient  */}
            {/* <motion.div
              className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-gradient-to-br from-purple-600/20 to-purple-900/30 blur-2xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.6, 0.5],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            /> */}
            <div className="my-56 w-fit aspect-square sm:hidden md:block">
              {/* Orbital elements */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute left-1/2 top-1/2"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * -4,
                  }}
                >
                  <div
                    className="relative h-4 w-4 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      transform: `rotate(${ 72}deg) translateX(${150 + i }px)`,
                    }}
                  >
                    <div className="h-16 w-16 overflow-hidden rounded-full border-2 border-transparent bg-white/10 backdrop-blur-sm">
                      <Image
                        src={demoImages[i].src}
                        alt="Team member"
                        width={40}
                        height={40}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
              {/* Center elements */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  className="h-16 w-16 text-white"
               
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                > 
                <Image
                src={logo}
                alt="Team member"
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
                  {/* Placeholder for logo/star */}
                  {/* <div className="h-full w-full rounded-full bg-gradient-to-br from-white/20 to-purple-500/20 backdrop-blur-sm" /> */}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
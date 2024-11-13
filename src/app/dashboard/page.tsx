// 'use client';
import { Card } from "@/components/ui/card";
import React, {useState, useEffect } from 'react'
// import { Badge } from "@/components/ui/badge";
// import { Zap } from "lucide-react";
import { SolanaBlinksCard } from '../blinkcard/SolanaBlinksCard';
import connectDB from "@/lib/dbconnect";
import { ICreator } from "@/lib/interface/creater";
import Creator from "@/lib/models/creater";
import Link from "next/link";
import Footer from "@/components/footer";
import CustomToggle from "@/components/custom-toggle";
export const dynamic = 'force-dynamic'
export default async function Component() {
  // const [selectedOption, setSelectedOption] = useState('All');

  // const handleToggle = (selected: string) => {
  //   setSelectedOption(selected);
  // };
  let creators: ICreator[] = [];
  try {
    await connectDB();
    creators = await Creator.find().sort({ _id: -1 });
  } catch (error) {
    console.error(error);
  }
  // if(selectedOption === 'Closed'){
  //   const yesterday = new Date();
  //   yesterday.setDate(yesterday.getDate() - 1);
  //   creators = creators.filter((creator) => new Date(creator.end) < yesterday);
  // }
  return (
    <>
      <div className="flex flex-col text-white p-4 sm:p-6 lg:p-8">
        <div className="my-4 flex items-center "> <div className=" my-4 mx-4">
        <CustomToggle options={["All", "Participated"]}  />
        {/* <CustomToggle options={["All", "Participated"]} onChange={handleToggle} /> */}
        </div>
          <h2 className="text-2xl mx-auto font-bold text-white text-center">
            Explore Campaigns
          </h2>
        </div>
       
        <div className="flex flex-wrap justify-center gap-5">
          
          {
            creators.map((creator) => {
              return (
                <>
                  <Link href={`/dashboard/${creator.id}`}>
                    <Card className="bg-black text-white h-fit border-gray-800">
                      {/* <CardHeader>
                        <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2">
                          <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
                          {creator.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h3 className="text-lg font-semibold mb-1 text-gray-400">Total Prize</h3>
                          <p className="text-2xl sm:text-3xl font-bold text-white">{creator.amount}</p>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-1 text-gray-400">Network Status</h3>
                          <Badge variant="secondary" className="bg-green-900 text-green-100 hover:bg-green-800">
                            Active
                          </Badge>
                        </div>
                      </CardContent> */}
                      <SolanaBlinksCard content={creator} id={creator.id} />
                    </Card>
                  </Link></>
              )
            })
          }

        </div>
        <Footer />
      </div>
    </>
  );
}

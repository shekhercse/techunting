"use client"
import myserviceData from "../data/my_services.json"
import Link from "next/link"
import { BackgroundGradient } from "./ui/background-gradient"

// own datatype
interface Service {
  id: number,
  title: string,
  slug: string,
  description: string,
  price: number,
  isFeatured: boolean,
}

const Services = () => {

  const services = myserviceData.myservices.filter((services: Service) => services.isFeatured)

  return (
    <div className='py-12 bg-gray-900'>
      <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">You Will get</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Website with the Best Technologies </p>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center ">
          {services.map((service: Service) =>
            <div key={service.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-gray-800 dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">

                <p className="text-lg sm:text-xl text-white mt-4 mb-2 darkLtext-neutral-200">{service.title}</p>
                <p className=" text-sm text-white-600 dark:text-white-400 flex-grow">{service.description}</p>
                <Link href={`/services/${service.slug}`}></Link>
                </div>
              </BackgroundGradient>
            </div>)}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link href={"/courses"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
          View all Services
        </Link>
      </div>
    </div>
  )
}

export default Services

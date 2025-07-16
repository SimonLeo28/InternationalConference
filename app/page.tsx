"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, Calendar, MapPin, Users, Globe, Clock, Star, ArrowRight, Play, Mic, Video, Coffee, Award, Ticket, Mail, Menu, CheckCircle, } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

{/** Importing Images */}
import clgLogo from "./logos/CollegeLogo.jpg"
import logo1 from "./logos/logo1.jpg"
import logo2 from "./logos/logo2.jpg"
import logo3 from "./logos/logo3.jpg"
import logo4 from "./logos/logo4.jpg"
import logo5 from "./logos/logo5.jpg"
import logo6 from "./logos/logo6.jpg"
import logo7 from "./logos/logo7.jpg"
import logo8 from "./logos/logo8.jpg"
import Hero from "./Images/hero1.jpg"
import Flyer from "./Images/ConferencePoster.jpg"


export default function ConferencePage() {

  const [registerUrl, setRegisterUrl] = useState('#');

useEffect(() => {
  if (true) {
    setRegisterUrl("https://conference-registration-omega.vercel.app/");
  }
}, []);


    const schedule = [
    {
      time: "1",
      title: "Artificial Intelligence and Data Science",
      type: "talk",
      speaker: "",
      description: "Network with fellow attendees",
    },
    {
      time: "2",
      title: "Advanced Computing & Networking",
      type: "talk",
      speaker: "",
      description: "Exploring the next decade of AI innovation",
    },
    {
      time: "3",
      title: "Cloud Computing",
      type: "talk",
      speaker: "",
      description: "Networking opportunity",
    },
    {
      time: "4",
      title: "Smart Cities & Mobility",
      type: "talk",
      speaker: "",
      description: "Latest advances in quantum technology",
    },
    {
      time: "5",
      title: "VLSI Design & Embedded Systems",
      type: "talk",
      speaker: "",
      description: "International cuisine and connections",
    },
  ]

  const schedule1 = [
    {
      time: "6",
      title: "Advanced Communication systems and Image Processing",
      type: "talk",
      speaker: "",
      description: "Network with fellow attendees",
    },
    {
      time: "7",
      title: "Robotics and Automation",
      type: "talk",
      speaker: "",
      description: "Exploring the next decade of AI innovation",
    },
    {
      time: "8",
      title: "Materials, Rare-earth & Critical Minerals",
      type: "talk",
      speaker: "",
      description: "Networking opportunity",
    },
    {
      time: "9",
      title: "Advanced Manufacturing and Operations Technologies",
      type: "talk",
      speaker: "",
      description: "Latest advances in quantum technology",
    },
    {
      time: "10",
      title: "Construction and Management Technologies",
      type: "talk",
      speaker: "",
      description: "International cuisine and connections",
    },
  ]

  const schedule2 = [
    {
      time: "11",
      title: "Energy, Sustainability & Climate Change",
      type: "talk",
      speaker: "",
      description: "Network with fellow attendees",
    },
    {
      time: "12",
      title: "AI Applications in Healthcare, Agriculture & Education",
      type: "talk",
      speaker: "",
      description: "Exploring the next decade of AI innovation",
    },
    {
      time: "13",
      title: "AI E-Governance",
      type: "talk",
      speaker: "",
      description: "Exploring the next decade of AI innovation",
    },
    {
      time: "14",
      title: "Cyber Security",
      type: "talk",
      speaker: "",
      description: "Exploring the next decade of AI innovation",
    },
    {
      time: "15",
      title: "Business Management, Business Analytics & Sustainable Management Practices.",
      type: "talk",
      speaker: "",
      description: "Networking opportunity",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0  p-1 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            {/*<Image 
              src={logo8}
              alt="College Logo"
              width={40}
              height={40}
              className="h-10 w-auto object-contain rounded-lg"
            /> */}
            <span className="font-bold text-gray-800">ICAINXT-26</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link href="#home" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
            <Link href="#about-college" className="text-gray-700 hover:text-blue-600 font-medium">About College</Link>
            <Link href="#about-conference" className="text-gray-700 hover:text-blue-600 font-medium">About Conference</Link>
            <Link href="#committee" className="text-gray-700 hover:text-blue-600 font-medium">Conference Committee</Link>
            <a target="_blank" href={registerUrl} className="text-gray-700 hover:text-blue-600 font-medium">Register</a>
          </div>
          <button className="md:hidden text-gray-700">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen pt-24 md:pt-12 relative overflow-hidden">
  {/* Background image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${Hero.src})` }}
    aria-hidden="true"
  />

  {/* Optional dark overlay */}
  <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

  {/* Content */}
  <div className="relative container mx-auto px-4 py-10 sm:py-12 md:py-16 text-center z-10">
    {/* Logos */}
    <div className="mb-8 flex flex-col sm:flex-row justify-center items-center gap-y-4 sm:gap-x-8">
      <Image
        src={logo1}
        alt="College Logo"
        width={100}
        height={100}
        className="h-20 w-20 sm:w-auto object-contain rounded-lg shadow-md border-2 border-white bg-white p-1"
      />
      <Image
        src={logo8}
        alt="Partner Logo"
        width={100}
        height={100}
        className="h-20 w-20 sm:w-auto object-contain rounded-lg shadow-md border-2 border-white bg-white p-1"
      />
    </div>

    {/* Institute Name */}
    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-100 mb-2">
      AMRUTA INSTITUTE OF ENGINEERING AND MANAGEMENT SCIENCES
    </h1>
    <p className="text-sm sm:text-base text-gray-200 mb-1">
      Approved by AICTE, New Delhi
    </p>
    <p className="text-sm sm:text-base text-gray-200 mb-4">
      Recognized by Government of Karnataka & Affiliated to VTU, Belagavi
    </p>

    {/* Conference Title */}
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
      International Conference on AI Innovations for Next Generation Technologies ICAINXT-26
    </h2>

    {/* Description */}
    <p className="text-sm sm:text-lg text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
      Join 5,000+ innovators, researchers, and visionaries from 50+ countries
      for three days of groundbreaking discoveries and global collaboration.
    </p>

    {/* Buttons */}
    <div className="w-full flex flex-col sm:flex-row gap-4 justify-center items-center px-4 mb-6 relative z-10">
      <Link target="_blank" href={registerUrl}>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 w-full sm:w-auto">
          <Ticket className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
          Register Now
        </Button>
      </Link>
      <a href={Flyer.src} target="_blank" rel="noopener noreferrer">
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 w-full sm:w-auto">
          <Ticket className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
          View Flyer
        </Button>
      </a>
    </div>

    {/* Date & Location */}
    <div className="flex flex-col sm:flex-row gap-3 justify-center items-center text-gray-300">
      <div className="flex items-center">
        <CalendarDays className="h-5 w-5 mr-2" />
        <span className="font-medium">09th and 10th January 2026</span>
      </div>
      <div className="flex items-center">
        <MapPin className="h-5 w-5 mr-2" />
        <span className="font-medium">AIEMS, Bengaluru</span>
      </div>
    </div>
  </div>
</section>



      {/* Partners Section */}
      <section id="partners" className="py-12 bg-white border-y border-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8">
            Affiliated By
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 items-center">
            {[logo2, logo3, logo4, logo5, logo6, logo7].map((logo, index) => (
              <div 
                key={index} 
                className="flex justify-center p-4 bg-gray-50 rounded-lg hover:bg-white hover:shadow-md transition-all"
              >
                <Image 
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  width={160}
                  height={90}
                  className="h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About College Section */}
      <section id="about-college" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              About Us
            </h2>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <Image 
                  src={logo1} 
                  alt="College Campus" 
                  width={400} 
                  height={300}
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-justify text-lg text-gray-700 mb-4">
                  Amruta Institute of Engineering and Management Sciences (AIEMS) was established in 2008 in Bengaluru
                  and is under the umbrella of Basaveshwara Vidya Vardhak Sangh (BVVS), Bagalkot. AIEMS is the result of the vision of our Chairman Dr Veeranna C Charantimath, 
                  His Holiness Gurubasava Swamiji of Bilur to proactively participate in establishing a world-class Institution for Technical Education. The Campus is on a sprawling 14.35
                  acres of land surrounded by lush green plantations in the Bidadi, Bengaluru City. The institution is affiliated with Visvesvaraya Technological University (VTU), Belagavi, India.
                </p>
                <p className="text-justify text-lg text-gray-700 mb-4">
                  Located in Bengaluru, AIEMS offers state-of-the-art facilities, 
                  experienced faculty, and strong industry connections. Our alumni network spans across top 
                  tech companies worldwide.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>NAAC 'B++' Grade Accredited</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>15+ Years of Excellence</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>5+ Academic Programs</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>30+ Industry Partnerships</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Conference Section */}
      <section id="about-conference" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              About <span className="text-blue-600">ICAINXT-26</span>
            </h2>
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="md:w-1/3">
                <Image 
                  src={logo8} 
                  alt="Conference" 
                  width={400} 
                  height={300}
                  className="rounded-lg shadow-xl, md:mb-0 lg:mb-6"
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-justify text-lg text-gray-700 mb-4">
                  The International Conference on AI solutions addressing Next Generation Technological Growth (ICAINXT-26) 
                  is a premier global forum bringing together researchers, industry experts, and innovators to explore 
                  cutting-edge advancements in artificial intelligence and its applications.
                </p>
                <p className="text-justify text-lg text-gray-700 mb-4">
                  Scheduled for December 10-12, 2025, this three-day conference will feature keynote speeches, technical 
                  paper presentations, workshops, and networking opportunities with AI leaders from around the world.
                </p>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <Calendar className="h-8 w-8 mx-auto text-blue-600 mb-2" />
                    <h3 className="font-bold text-sm text-gray-800">August 30, 2025</h3>
                    <p className="text-sm text-gray-600">Abstract submission Deadline</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <Calendar className="h-8 w-8 mx-auto text-blue-600 mb-2" />
                    <h3 className="font-bold text-sm text-gray-800">September 30, 2025</h3>
                    <p className="text-sm text-gray-600">Submission Deadline</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <Calendar className="h-8 w-8 mx-auto text-blue-600 mb-2" />
                    <h3 className="font-bold text-sm text-gray-800">October 30, 2025</h3>
                    <p className="text-sm text-gray-600">Notification of Acceptance</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <Calendar className="h-8 w-8 mx-auto text-blue-600 mb-2" />
                    <h3 className="font-bold text-sm text-gray-800">November 15, 2025</h3>
                    <p className="text-sm text-gray-600">Registration Deadline</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <Calendar className="h-8 w-8 mx-auto text-blue-600 mb-2" />
                    <h3 className="font-bold text-sm text-gray-800">January 9 and 10, 2026</h3>
                    <p className="text-sm text-gray-600">Conference Dates</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organizing Committee Section */}
<section id="committee" className="py-16 bg-gray-50">
  <div className="container mx-auto px-4 max-w-6xl">
    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
      Conference <span className="text-blue-600">Organizers & Boards</span>
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      {/* Chief Patrons */}
      <div>
        <h3 className="text-xl font-semibold text-blue-700 mb-3">Chief Patrons</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Shri Dr. Veeranna C. Charantimath</li>
          <li>Dr. S. Vidyashankar – Vice Chancellor, VTU</li>
        </ul>
      </div>

      {/* Patrons */}
      <div>
        <h3 className="text-xl font-semibold text-blue-700 mb-3">Patrons</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Shri Mahesh N Athani – Hon. Secretary, BVVS</li>
          <li>Sri. Mahantesh S Shettar – Governing Council Chairman, AIEMS</li>
          <li>Dr. Rangaswamy B E – Registrar (Academics), VTU</li>
          <li>Dr. T. N. Sreenivasa – Registrar (Evaluation), VTU</li>
        </ul>
      </div>

      {/* General Chair */}
      <div>
        <h3 className="text-xl font-semibold text-blue-700 mb-3">General Chair</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Dr. Santosh M Muranal – Principal, AIEMS</li>
        </ul>
        <h3 className="text-xl font-semibold text-blue-700 mt-6 mb-3">General Co-Chair</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Dr. RSK – Dean Academic, AIEMS</li>
        </ul>
      </div>

      {/* Organizing Chair */}
      <div>
        <h3 className="text-xl font-semibold text-blue-700 mb-3">Organizing Chair</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Dr. Kumar B I D – Professor & HoD, ISE Dept, AIEMS</li>
        </ul>
      </div>

      {/* Technical Program Committee */}
      <div>
        <h3 className="text-xl font-semibold text-blue-700 mb-3">Technical Program Committee</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Dr. Pratibhadevi Tapashetti – Professor, Dept of ECE, AIEMS</li>
          <li>Dr. Mahantesh Mathapati – Professor, Dept. of CSE, AIEMS</li>
          <li>Dr. Vinod Kumar Biradar – Associate Professor, Mechanical, AIEMS</li>
          <li>Mrs. Arpitha G C – Assistant Professor, Civil, AIEMS</li>
          <li>Mr. Kiran Suraj S. – Assistant Professor, MBA, AIEMS</li>
        </ul>
      </div>

      {/* Organizing Program Committee */}
      <div>
        <h3 className="text-xl font-semibold text-blue-700 mb-3">Organizing Program Committee</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Dr. Shreedhara – Professor & HoD, CSE, AIEMS</li>
          <li>Dr. Veeresh Patil – Professor & HoD, E&C, AIEMS</li>
          <li>Dr. Rudra Murthy – Professor & HoD, Civil, AIEMS</li>
          <li>Dr. Dr. Pradeep – Professor & HoD, MBA, AIEMS</li>
          <li>Mr. Shreyas Shivananjappa – Assistant Professor, HOD Basic Science, AIEMS</li>
        </ul>
      </div>
    </div>
  </div>
</section>


      {/* Speakers Section (Placeholder)
      <section id="speakers" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Featured <span className="text-blue-600">Speakers</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Speaker cards would go here 
            <div className="text-center">
              <div className="bg-gray-200 h-64 w-64 mx-auto rounded-full mb-4"></div>
              <h3 className="text-xl font-bold">Speaker Name</h3>
              <p className="text-gray-600">Position, Company</p>
            </div>
            {/* Add more speaker cards 
          </div>
        </div>
      </section> */}

            {/* Schedule Section */}
      <section id="schedule" className="py-16 sm:py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-6">Conference Themes</h2>
            <p className="text-base sm:text-lg text-gray-600">Authors are invited to contribute to the conference by 
              submitting original articles that showcase research findings, project outcomes, experimental studies, and
              industrial experiences. Submissions may cover, but are not limited to, the following thematic areas.</p>
          </div>

          <Tabs defaultValue="day1" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 bg-white border border-gray-200 shadow-sm">
              <TabsTrigger 
                value="day1" 
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                Part 1
              </TabsTrigger>
              <TabsTrigger 
                value="day2" 
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                Part 2
              </TabsTrigger>
              <TabsTrigger 
                value="day3" 
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                Part 3
              </TabsTrigger>
            </TabsList>

            <TabsContent value="day1" className="mt-6 sm:mt-8">
              <div className="space-y-4 sm:space-y-6">
                {schedule.map((item, index) => (
                  <Card key={index} className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                        <div className="flex items-center gap-2 text-blue-600 min-w-[100px] sm:min-w-[120px]">
                          <Clock className="h-4 w-4" />
                          <span className="text-sm font-medium">Theme {item.time}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="day2" className="mt-6 sm:mt-8">
              <div className="space-y-4 sm:space-y-6">
                {schedule1.map((item, index) => (
                  <Card key={index} className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                        <div className="flex items-center gap-2 text-blue-600 min-w-[100px] sm:min-w-[120px]">
                          <Clock className="h-4 w-4" />
                          <span className="text-sm font-medium">Theme {item.time}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="day3" className="mt-6 sm:mt-8">
              <div className="space-y-4 sm:space-y-6">
                {schedule2.map((item, index) => (
                  <Card key={index} className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                        <div className="flex items-center gap-2 text-blue-600 min-w-[100px] sm:min-w-[120px]">
                          <Clock className="h-4 w-4" />
                          <span className="text-sm font-medium">Theme {item.time}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Registration Section */}
      {/* <section id="register" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Conference <span className="text-blue-600">Registration</span>
          </h2>
          <a href={registerUrl}>
          <div className="bg-blue-50 rounded-xl p-8 shadow-md">
            <h3 className="text-2xl font-bold text-center">Register for ICASNXT-25</h3>
          </div>
          </a>
        </div>
      </section> */}


      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ICAINXT-26</h3>
              <p className="text-gray-400">International Conference on AI solutions addressing Next Generation Technological Growth</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="#home" className="text-gray-400 hover:text-white">Home</Link></li>
                <li><Link href="#about-college" className="text-gray-400 hover:text-white">About College</Link></li>
                <li><Link href="#about-conference" className="text-gray-400 hover:text-white">About Conference</Link></li>
                <li><Link href="#speakers" className="text-gray-400 hover:text-white">Speakers</Link></li>
                <li><a href={registerUrl} className="text-gray-400 hover:text-white">Register</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <address className="text-gray-400 not-italic">
                Dr. Kumar B I D<br />
                Professor & HoD, ISE Dept<br />
                Amruta Institute of Engineering and Management Sciences<br />
                Bangalore, Karnataka, India<br />
                Email: dr.kumarbid@aiems.edu.in<br />
                Phone: +91 78924 38079
              </address>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 ICAINXT-26. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
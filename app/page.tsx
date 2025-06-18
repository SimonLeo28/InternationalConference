"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Calendar,
  MapPin,
  Users,
  Globe,
  Clock,
  Star,
  ArrowRight,
  Play,
  Mic,
  Video,
  Coffee,
  Award,
  Ticket,
  Mail,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Replace these with your actual logo imports
import logo1 from "./logos/logo1.jpg"
import logo2 from "./logos/logo2.jpg"
import logo3 from "./logos/logo3.jpg"
import logo4 from "./logos/logo4.jpg"
import logo5 from "./logos/logo5.jpg"
import logo6 from "./logos/logo6.jpg"
import logo7 from "./logos/logo7.jpg"
import logo8 from "./logos/logo8.jpg"
import clgLogo from "./logos/CollegeLogo.jpg"

export default function ConferencePage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const targetDate = new Date("2024-09-15T09:00:00")
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const speakers = [
    {
      name: "Dr. Sarah Chen",
      title: "AI Research Director",
      company: "TechCorp Global",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Leading expert in machine learning and neural networks",
      country: "🇺🇸 USA",
    },
    // ... other speakers
  ]

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
      title: "AI in Management",
      type: "talk",
      speaker: "",
      description: "Exploring the next decade of AI innovation",
    },
    {
      time: "13",
      title: "Business Management, Business Analytics & Sustainable Management Practices.",
      type: "talk",
      speaker: "",
      description: "Networking opportunity",
    },
  ]

  const partnerLogos = [
    { src: logo1, alt: "Partner 1" },
    { src: logo2, alt: "Partner 2" },
    { src: logo3, alt: "Partner 3" },
    { src: logo4, alt: "Partner 4" },
    { src: logo5, alt: "Partner 5" },
    { src: logo6, alt: "Partner 6" },
    { src: logo7, alt: "Partner 7" },
    { src: logo8, alt: "Partner 8" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 text-gray-900">
      {/* Navigation - Responsive with Mobile Menu */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-xl md:text-2xl font-bold text-blue-800">TechGlobal 2025</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="#about" className="text-gray-700 hover:text-blue-600 transition-colors text-sm lg:text-base">
                About
              </Link>
              <Link href="#speakers" className="text-gray-700 hover:text-blue-600 transition-colors text-sm lg:text-base">
                Speakers
              </Link>
              <Link href="#schedule" className="text-gray-700 hover:text-blue-600 transition-colors text-sm lg:text-base">
                Schedule
              </Link>
              <Link href="#partners" className="text-gray-700 hover:text-blue-600 transition-colors text-sm lg:text-base">
                Partners
              </Link>
              <Link href="#venue" className="text-gray-700 hover:text-blue-600 transition-colors text-sm lg:text-base">
                Venue
              </Link>
              <Button className="bg-blue-600 hover:bg-blue-700 text-sm lg:text-base">
                Register
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              <Link href="#about" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
                About
              </Link>
              <Link href="#speakers" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
                Speakers
              </Link>
              <Link href="#schedule" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
                Schedule
              </Link>
              <Link href="#partners" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
                Partners
              </Link>
              <Link href="#venue" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
                Venue
              </Link>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 mt-2">
                Register Now
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 md:pt-32 pb-12 md:pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-lg md:text-xl font-bold text-gray-700 mb-3 md:mb-4">
              AMRUTA INSTITUTE OF ENGINEERING AND MANAGEMENT SCIENCES
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              Where Innovation
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {" "}
                Meets{" "}
              </span>
              the World
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto">
              Join 5,000+ innovators, researchers, and visionaries from 50+ countries for three days of groundbreaking
              discoveries and global collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8">
                <Ticket className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Register Now
              </Button>
              <Link href="#about">
                <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100">
                  <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  About the Event
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partners/Logos Section */}
      <section id="partners" className="py-8 sm:py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-6 sm:mb-8">
            Our Partners & Affiliations
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6 items-center">
            {partnerLogos.map((logo, index) => (
              <div 
                key={index} 
                className="flex justify-center p-2 sm:p-4 hover:scale-105 transition-transform duration-200"
              >
                <Image 
                  src={logo.src} 
                  alt={logo.alt}
                  width={120}
                  height={80}
                  className="h-12 sm:h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 px-4 bg-blue-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 text-center">
            {[
              { value: "5,000+", label: "Attendees" },
              { value: "50+", label: "Countries" },
              { value: "100+", label: "Speakers" },
              { value: "3", label: "Days" }
            ].map((stat, index) => (
              <div key={index} className="p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">About TechGlobal 2025</h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              This premier conference aims to bring together academicians, researchers and industry experts to explore AI solutions addressing Next Generation Technological Growth in all the Technological domains driven by Artificial Intelligence such as Data Science and Advanced Computer Networking solutions, Machine Manufacturing & operations, Construction technology and Management and so on.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <Users className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600 mb-3" />,
                title: "Global Network",
                content: "Connect with innovators, entrepreneurs, and thought leaders from every continent."
              },
              {
                icon: <Award className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600 mb-3" />,
                title: "Cutting-Edge Content",
                content: "Discover the latest breakthroughs in AI, quantum computing, biotech, and more."
              },
              {
                icon: <Star className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600 mb-3" />,
                title: "World-Class Experience",
                content: "Immersive experiences, interactive demos, and unforgettable networking opportunities."
              }
            ].map((item, index) => (
              <Card key={index} className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="items-center text-center">
                  {item.icon}
                  <CardTitle className="text-lg sm:text-xl text-gray-900">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-gray-600 text-center">{item.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="py-16 sm:py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-6">Featured Speakers</h2>
            <p className="text-base sm:text-lg text-gray-600">Learn from the world's leading experts and visionaries</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {speakers.map((speaker, index) => (
              <Card 
                key={index}
                className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <CardHeader className="text-center">
                  <Avatar className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-3 sm:mb-4">
                    <AvatarImage src={speaker.image} alt={speaker.name} />
                    <AvatarFallback>
                      {speaker.name.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-lg sm:text-xl text-gray-900">{speaker.name}</CardTitle>
                  <CardDescription className="text-blue-600">{speaker.title}</CardDescription>
                  <Badge variant="outline" className="border-gray-300 text-gray-600 mt-2">
                    {speaker.country}
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-gray-600 mb-2">{speaker.bio}</p>
                  <p className="text-sm text-blue-600 font-medium">{speaker.company}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-16 sm:py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-6">Conference Themes</h2>
            <p className="text-base sm:text-lg text-gray-600">Real Time Based Themes</p>
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
                          <span className="text-sm font-medium">Session {item.time}</span>
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
                          <span className="text-sm font-medium">Session {item.time}</span>
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
                          <span className="text-sm font-medium">Session {item.time}</span>
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

            {/* Other TabsContent for day2 and day3 */}
          </Tabs>
        </div>
      </section>

      {/* Venue Section */}
      <section id="venue" className="py-16 sm:py-20 px-4   bg-blue-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Venue</h2>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Amruta Institute of Engineering and Management Sciences</h3>
                    <p className="text-base text-gray-600">Bengaluru</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">September 15-17, 2024</h3>
                    <p className="text-base text-gray-600">Day of Innovation</p>
                  </div>
                </div>
              </div>
              <p className="text-base text-gray-600 mt-6 sm:mt-8 leading-relaxed">
                Experience TechGlobal 2025 at Amruta Institute of Engineering and Management Sciences offers
                state-of-the-art facilities, stunning views, and easy access to Bengaluru's vibrant tech ecosystem.
              </p>
              <Link href={"https://maps.app.goo.gl/F2ve8iTYcvif7iB77"}>
              <Button className="mt-6 sm:mt-8 bg-blue-600 hover:bg-blue-700">
                <MapPin className="mr-2 h-4 w-4" />
                View Location
              </Button>
              </Link>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image
                src={clgLogo}
                alt="Conference Venue"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Ready to Shape the Future?</h2>
            <p className="text-base sm:text-lg mb-6 sm:mb-8">
              Join thousands of innovators from around the world. Register Now to secure your spot
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8">
              <Ticket className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Register Now
            </Button>
          </div>
        </div>
      </section>

        {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Globe className="h-5 w-5 text-blue-400" />
                <span className="text-lg font-bold">TechGlobal 2025</span>
              </div>
              <p className="text-sm text-gray-400">The world's premier international technology conference.</p>
            </div>
            <div>
              <h4 className="text-base font-semibold mb-3 sm:mb-4">Quick Links</h4>
              <div className="space-y-2">
                {['About', 'Speakers', 'Schedule', 'Venue'].map((link) => (
                  <Link 
                    key={link} 
                    href={`#${link.toLowerCase()}`} 
                    className="block text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-base font-semibold mb-3 sm:mb-4">Support</h4>
              <div className="space-y-2">
                {['Contact', 'FAQ', 'Travel', 'Accommodation'].map((link) => (
                  <Link 
                    key={link} 
                    href="#" 
                    className="block text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-base font-semibold mb-3 sm:mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {[
                  { icon: <Twitter className="h-5 w-5" />, link: "#" },
                  { icon: <Linkedin className="h-5 w-5" />, link: "#" },
                  { icon: <Github className="h-5 w-5" />, link: "#" }
                ].map((social, index) => (
                  <Link 
                    key={index} 
                    href={social.link} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-8 text-center">
            <p className="text-xs sm:text-sm text-gray-400">
              © 2024 TechGlobal Conference. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
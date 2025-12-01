"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Database,
  Server,
  Smartphone,
  Globe,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
} from "lucide-react"
import Image from "next/image";
import Link from "next/link"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2; // 中线判断

      let matchedSection = null;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            matchedSection = section;
            break;
          }
        }
      }

      const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 10;
      if (scrolledToBottom) {
        matchedSection = "contact";
      }

      if (matchedSection && matchedSection !== activeSection) {
        setActiveSection(matchedSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);



  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const skills = {
    frontend: [
      { name: "React" },
      { name: "NextJs" },
      { name: "Tailwind CSS" },
      { name: "VueJs" },
    ],
    backend: [
      { name: "NodeJs", level: 90 },
      { name: "C# .Net", level: 85 },
      { name: "Express.js", level: 88 },
      { name: "Restful Api", level: 82 },
      { name: "NestJs", level: 80 },
    ],
    database: [
      { name: "Mysql" },
      { name: "SQL" },
      { name: "TypeORM" }
    ],
    tools: [
      { name: "Docker" },
      { name: "Google Cloud" },
      { name: "AWS EC2" },
      { name: "Git" },
      { name: "Linux" },
    ],
  }

  const projects = [
    {
      title: "POS System Admin Portal",
      description:
        "A POS system admin portal that allow admin to track stock and sales etc...",
      tech: ["ReactJs", "Tailwind CSS", "Shadcn UI", "Typescript"],
      github: "https://github.com/chhsBusinessSolution/pos_sys_admin_portal"
    },
    {
      title: "ExpressJS & RestFul API Backend",
      description:
        "A expressJs and restful api backend service (similar with NextJs)",
      tech: ["NodeJs", "ExpressJs", "Restful API", "Typescript", "Mysql"],
      github: "https://github.com/chhsBusinessSolution/pos_sys_backend"
    },
    {
      title: "Gemini Agent ChatBot",
      description:
        "A TypeScript + Node.js Express service that wraps the Google Gemini API to provide a simple chat/agent endpoint",
      tech: ["NodeJs", "Typescript", "MonggoDB"],
      github: "https://github.com/secretMan255/gemini_agent_chat_bot"
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex py-4">
            <div className="hidden md:flex space-x-8 items-center justify-center w-full">
              {["home", "about", "skills", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize text-lg font-medium transition-colors duration-200 ${activeSection === item ? "text-blue-600" : "text-gray-600 hover:text-gray-900"
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button className="md:hidden text-gray-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              {["home", "about", "skills", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-3 capitalize text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      < section id="home" className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20" >
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <div className='flex flex-col'>
              <div className="text-2xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                Hi, I am Yi Liang
              </div>
              <div className="text-2xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                Full-Stack <span className="text-blue-600">Developer</span>
              </div>
            </div>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Crafting digital experiences with modern technologies. Passionate about creating scalable, user-friendly
              applications that make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-base font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
              >
                View My Work
                <ArrowRight className="ml-2" size={16} />
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-base font-medium rounded-full transition-all duration-200"
              >
                Get In Touch
              </Button>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="text-gray-400" size={24} />
          </div>
        </div>
      </section >

      {/* About Section */}
      < section id="about" className="py-24 px-6 lg:px-8 bg-gray-50" >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">About</h2>
            <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  I&#39;m 24 year&#39;s old and a passionate <span className="font-semibold text-blue-600">Full-Stack Developer</span> with 2+ years of experience. I love turning complex problems into simple, efficient, and intuitive solutions.
                </p>
                <p>
                  In addition to this, I&#39;m also a crypto lover. My portfolio consists of <span className="font-semibold text-blue-600">100% altcoins</span> including ADA, ETH, POL, and SOL.
                </p>
                <div className="flex flex-wrap gap-3 pt-4">
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200 px-4 py-2">
                    Problem Solver
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200 px-4 py-2">
                    Team Player
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200 px-4 py-2">
                    Continuous Learner
                  </Badge>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <Image src="/lengzai.jpeg" alt="My photo" width={300} height={300} />
            </div>
          </div>
        </div>
      </section >

      {/* Skills Section */}
      < section id="skills" className="py-24 px-6 lg:px-8" >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Skills</h2>
            <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Frontend */}
            <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-2xl">
              <CardHeader className="pb-4">
                <CardTitle className="flex flex-row justify-center items-center text-gray-900 text-xl font-semibold">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-3">
                    <Globe className="text-blue-600" size={24} />
                  </div>
                  Frontend
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-center">
                {skills.frontend.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-center">
                      <span className="text-blue-600 font-bold leading-none mb-5">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Backend */}
            <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-2xl">
              <CardHeader className="pb-4">
                <CardTitle className="flex flex-row justify-center items-center text-gray-900 text-xl font-semibold">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-3">
                    <Server className="text-green-600" size={24} />
                  </div>
                  Backend
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.backend.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-center">
                      <span className="text-green-600 font-bold leading-none mb-5">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Database */}
            <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-2xl">
              <CardHeader>
                <CardTitle className="flex flex-row justify-center items-center text-gray-900 text-xl font-semibold">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-3">
                    <Database className="text-purple-600" size={24} />
                  </div>
                  Database
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.database.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-center">
                      <span className="text-purple-600 font-bold leading-none mb-5">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Tools */}
            <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-2xl">
              <CardHeader >
                <CardTitle className="flex flex-row justify-center items-center text-gray-900 text-xl font-semibold">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-3">
                    <Smartphone className="text-orange-600" size={24} />
                  </div>
                  Tools & DevOps
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.tools.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-center">
                      <span className="text-orange-600 font-bold leading-none mb-5">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section >

      {/* Projects Section */}
      < section id="projects" className="py-24 px-6 lg:px-8 bg-gray-50" >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Projects</h2>
            <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-2xl overflow-hidden"
              >
                <CardHeader>
                  <CardTitle className="text-gray-900 text-xl font-semibold">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex gap-4">
                    <Link
                      href={project.github}
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-medium"
                    >
                      <Github size={16} />
                      Code
                    </Link>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-gray-100 text-gray-700 border-gray-200 px-3 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section >

      {/* Contact Section */}
      < section id="contact" className="py-24 px-6 lg:px-8" >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Get In Touch</h2>
            <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 font-light">
              {"I'm always open to discussing new opportunities and interesting projects."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Link
              href="mailto:yapyiliangww321@gmail.com"
              className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Mail className="text-blue-600" size={24} />
              </div>
              <h3 className="text-gray-900 font-semibold mb-2 text-lg">Email</h3>
              <p className="text-gray-600 text-[10px] break-words">yapyiliangww321@gmail.com</p>
            </Link>

            <Link
              href="https://wa.me/60172223195?text=Hello%2C%20I%20am%20interested%20in%20you"
              className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Phone className="text-green-600" size={24} />
              </div>
              <h3 className="text-gray-900 font-semibold mb-2 text-lg">Whatsapp</h3>
              <p className="text-gray-600 text-sm">+(60) 17 2223 195</p>
            </Link>

            <Link
              href="https://github.com/secretMan255"
              target="_blank"
              className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-colors">
                <Github className="text-gray-700" size={24} />
              </div>
              <h3 className="text-gray-900 font-semibold mb-2 text-lg">GitHub</h3>
              <p className="text-gray-600 text-sm">@secretMan255</p>
            </Link>

            <Link
              href="https://www.linkedin.com/in/yap-yi-liang-81721b19b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Linkedin className="text-blue-600" size={24} />
              </div>
              <h3 className="text-gray-900 font-semibold mb-2 text-lg">LinkedIn</h3>
              <p className="text-gray-600 text-sm">@Yi Liang</p>
            </Link>
          </div>
        </div>
      </section >
    </div >
  )
}

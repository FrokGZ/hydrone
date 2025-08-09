"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  MapPin,
  Calendar,
  Zap,
  Shield,
  Leaf,
  Award,
  Mail,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea   } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"

export default function HydronePage() {
  const [darkMode, setDarkMode] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  // Preloader effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  // Dark mode toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  // Scroll detection for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "project",
        "technology",
        "impact",
        "timeline",
        "testimonials",
        "news",
        "team",
        "contact",
      ]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const navigationItems = [
    { id: "hero", label: "Inicio" },
    { id: "project", label: "Proyecto" },
    { id: "technology", label: "Tecnología" },
    { id: "impact", label: "Impacto" },
    { id: "timeline", label: "Hitos" },
    { id: "testimonials", label: "Testimonios" },
    { id: "news", label: "Noticias" },
    { id: "team", label: "Equipo" },
    { id: "contact", label: "Contacto" },
  ]

  const technologies = [
    {
      title: "Navegación Autónoma",
      description: "Sistema GPS avanzado con waypoints programables y retorno automático a base",
      icon: <MapPin className="w-8 h-8" />,
      features: ["GPS de alta precisión", "Waypoints programables", "Retorno automático", "Navegación por obstáculos"],
    },
    {
      title: "Detección Térmica",
      description: "Cámara FLIR Lepton 3.5 con IA para detección temprana de incendios",
      icon: <Zap className="w-8 h-8" />,
      features: ["Resolución 160x120", "Detección automática", "Procesamiento IA", "Alertas en tiempo real"],
    },
    {
      title: "Sistema de Supresión",
      description: "Tanque presurizado con retardante ecológico y descarga precisa",
      icon: <Shield className="w-8 h-8" />,
      features: ["Capacidad 5kg", "Retardante ecológico", "Descarga dirigida", "Control por GPS"],
    },
    {
      title: "Energía Sostenible",
      description: "Recarga por energía cinética hidráulica en cursos de agua naturales",
      icon: <Leaf className="w-8 h-8" />,
      features: ["Turbina compacta", "Recarga autónoma", "Cero emisiones", "Operación continua"],
    },
  ]

  const timelineEvents = [
    {
      date: "2024-01",
      title: "Conceptualización del Proyecto",
      description: "Identificación de la problemática y desarrollo del concepto inicial de Hydrone.",
      milestone: true,
    },
    {
      date: "2024-03",
      title: "Diseño del Prototipo",
      description: "Desarrollo de los planos técnicos y selección de componentes.",
      milestone: false,
    },
    {
      date: "2024-06",
      title: "Desarrollo del Retardante Ecológico",
      description: "Formulación y pruebas del compuesto biodegradable.",
      milestone: true,
    },
    {
      date: "2024-09",
      title: "Integración de IA",
      description: "Implementación de algoritmos de detección térmica con TensorFlow.",
      milestone: false,
    },
    {
      date: "2024-12",
      title: "Pruebas de Campo",
      description: "Validación del sistema en condiciones reales controladas.",
      milestone: true,
    },
    {
      date: "2025-03",
      title: "Lanzamiento Comercial",
      description: "Inicio de operaciones comerciales y alianzas estratégicas.",
      milestone: true,
    },
  ]

  const testimonials = [
    {
      name: "Dr. María González",
      role: "Directora CONAF Región del Biobío",
      content:
        "Hydrone representa una innovación revolucionaria en la prevención de incendios forestales. Su capacidad de detección temprana podría salvar miles de hectáreas.",
      avatar: "/forest-expert-woman.png",
    },
    {
      name: "Ing. Carlos Mendoza",
      role: "Especialista en Drones Forestales",
      content:
        "La integración de IA con sistemas de supresión autónomos marca un antes y después en la tecnología de combate contra incendios.",
      avatar: "/placeholder-4eddz.png",
    },
    {
      name: "Dra. Ana Ruiz",
      role: "Investigadora en Sostenibilidad Ambiental",
      content:
        "El uso de retardantes ecológicos y energía renovable hace de Hydrone una solución verdaderamente sostenible para nuestros bosques.",
      avatar: "/female-environmental-scientist.png",
    },
  ]

  const newsArticles = [
    {
      title: "Temporada de Incendios 2024: Récord de Hectáreas Afectadas",
      excerpt:
        "Chile registra la peor temporada de incendios de la última década con más de 800,000 hectáreas afectadas.",
      date: "2024-12-15",
      category: "Actualidad",
      image: "/forest-fire-news.png",
    },
    {
      title: "Innovación Tecnológica en Prevención de Incendios",
      excerpt:
        "Nuevas tecnologías de drones autónomos prometen revolucionar la detección temprana de incendios forestales.",
      date: "2024-12-10",
      category: "Tecnología",
      image: "/drone-innovation.png",
    },
    {
      title: "Impacto del Cambio Climático en Incendios Forestales",
      excerpt:
        "Estudios revelan que el cambio climático aumentará la frecuencia e intensidad de incendios en un 40% para 2030.",
      date: "2024-12-05",
      category: "Medio Ambiente",
      image: "/climate-change-forest.png",
    },
  ]

  const teamMembers = [
    {
      name: "Vicente Sepúlveda Ríos",
      role: "Desarrollador de Software & Logística",
      description: "Especialista en programación de sistemas autónomos y coordinación de proyectos tecnológicos.",
      email: "vicentesepulvedarios@alumnoscosl.cl",
      image: "/young-male-student-programmer.png",
      skills: ["Python", "IA/ML", "Sistemas Embebidos", "Gestión de Proyectos"],
    },
    {
      name: "Cristóbal Cartes Benítez",
      role: "Ingeniero de Hardware & Logística",
      description: "Experto en diseño electrónico, prototipado 3D y coordinación técnica del proyecto.",
      email: "cristobalcartesbenitez@alumnoscosl.cl",
      image: "/young-male-student-engineer.png",
      skills: ["Diseño 3D", "Electrónica", "Prototipado", "CAD/CAM"],
    },
    {
      name: "Sebastián Vargas Mora",
      role: "Investigador Científico & Químico",
      description: "Responsable de la investigación científica y desarrollo de compuestos químicos ecológicos.",
      email: "sebastianvargasmora@alumnoscosl.cl",
      image: "/placeholder-3ly3z.png",
      skills: ["Química Aplicada", "Investigación", "Análisis de Datos", "Sostenibilidad"],
    },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  // Preloader Component
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-white dark:bg-gray-900 flex items-center justify-center z-50">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full mx-auto mb-4"
          />
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-3xl font-bold text-gray-900 dark:text-white"
          >
            <span className="text-red-500">Hy</span>drone
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-gray-600 dark:text-gray-400 mt-2"
          >
            Cargando innovación...
          </motion.p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                <span className="text-red-500">Hy</span>drone
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id ? "text-red-500" : "text-gray-600 dark:text-gray-300 hover:text-red-500"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Dark Mode Toggle & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">🌙</span>
                <Switch checked={darkMode} onCheckedChange={setDarkMode} className="data-[state=checked]:bg-red-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400">☀️</span>
              </div>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
            >
              <div className="px-4 py-2 space-y-1">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-red-500 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url('/forest-fire-drone-aerial.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="text-red-500">Hy</span>drone
              <br />
              <span className="text-3xl md:text-5xl font-light">Combate de Incendios</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Innovación tecnológica autónoma para la detección temprana y combate eficiente de incendios forestales
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                size="lg"
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-lg"
                onClick={() => scrollToSection("project")}
              >
                Descubre el Proyecto
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg bg-transparent"
                onClick={() => scrollToSection("technology")}
              >
                Ver Tecnología
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronDown className="w-8 h-8 text-white opacity-70" />
        </motion.div>
      </section>

      {/* Project Section */}
      <section id="project" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              El Proyecto <span className="text-red-500">Hydrone</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Un sistema autónomo revolucionario que combina inteligencia artificial, sostenibilidad y tecnología de
              vanguardia para proteger nuestros bosques
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Protección Autónoma</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                  Hydrone es un dron autónomo diseñado específicamente para el combate de incendios forestales, equipado
                  con un sistema de carga y liberación de retardante ecológico. Su diseño innovador incorpora un sistema
                  de recarga por energía cinética hidráulica.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Capacidad de Carga</h4>
                    <p className="text-gray-600 dark:text-gray-400">Hasta 5kg de retardante ecológico</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Autonomía</h4>
                    <p className="text-gray-600 dark:text-gray-400">Recarga automática en cursos de agua</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Detección</h4>
                    <p className="text-gray-600 dark:text-gray-400">IA avanzada con cámara térmica</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Precisión</h4>
                    <p className="text-gray-600 dark:text-gray-400">GPS de alta precisión</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img src="/placeholder.svg?height=600&width=800" alt="Hydrone en acción" className="w-full h-auto" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-xl font-bold mb-2">Hydrone en Acción</h4>
                  <p className="text-sm opacity-90">Sistema autónomo de combate contra incendios</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Tecnología <span className="text-red-500">Avanzada</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Componentes de vanguardia que hacen posible la detección temprana y el combate eficiente de incendios
              forestales
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full bg-white dark:bg-gray-900 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">{tech.icon}</div>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">{tech.title}</CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-400">{tech.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {tech.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section with Animated Charts */}
      <section id="impact" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Impacto <span className="text-red-500">Ambiental</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Datos que demuestran la urgencia de soluciones innovadoras para combatir los incendios forestales
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { number: "700,000", label: "Hectáreas afectadas en Chile (2017-2023)", icon: "🔥" },
              { number: "$100M", label: "Costo económico anual en Chile", icon: "💰" },
              { number: "14%", label: "Aumento proyectado para 2030", icon: "📈" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">{stat.number}</div>
                  <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Retardante Ecológico Innovador</h3>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400">
                  Nuestro retardante ecológico utiliza una base de almidón modificado, proteínas vegetales y minerales
                  naturales, reduciendo significativamente el impacto ambiental comparado con los retardantes
                  convencionales.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Leaf className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">100% Biodegradable</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-blue-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">No Tóxico</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">Recuperación Rápida</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-purple-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">Certificado Ecológico</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl p-8 text-white">
                <h4 className="text-xl font-bold mb-4">Sistema de Recarga Sostenible</h4>
                <p className="mb-6">
                  Aprovecha la energía cinética del agua para recarga autónoma, eliminando la necesidad de
                  infraestructura convencional.
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Eficiencia Energética</span>
                    <span className="font-bold">95%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <motion.div
                      className="bg-white h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "95%" }}
                      transition={{ duration: 2, delay: 0.5 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Hitos del <span className="text-red-500">Proyecto</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              El camino hacia la innovación en combate de incendios forestales
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-red-500 rounded-full" />

            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge
                            variant={event.milestone ? "default" : "secondary"}
                            className={event.milestone ? "bg-red-500" : ""}
                          >
                            {event.date}
                          </Badge>
                          {event.milestone && <Award className="w-5 h-5 text-red-500" />}
                        </div>
                        <CardTitle className="text-lg font-bold text-gray-900 dark:text-white">{event.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 dark:text-gray-400">{event.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline Node */}
                  <div className="relative z-10">
                    <div
                      className={`w-6 h-6 rounded-full border-4 border-white dark:border-gray-900 ${
                        event.milestone ? "bg-red-500" : "bg-gray-400"
                      }`}
                    />
                  </div>

                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Testimonios de <span className="text-red-500">Expertos</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Lo que dicen los profesionales sobre la innovación de Hydrone
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <Card className="bg-gray-50 dark:bg-gray-800 border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <img
                        src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                        alt={testimonials[currentTestimonial].name}
                        className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                      />
                      <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 italic mb-6">
                        "{testimonials[currentTestimonial].content}"
                      </blockquote>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                          {testimonials[currentTestimonial].name}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">{testimonials[currentTestimonial].role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentTestimonial ? "bg-red-500" : "bg-gray-300 dark:bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Noticias y <span className="text-red-500">Actualidad</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Mantente informado sobre incendios forestales y avances tecnológicos
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
              >
                <Card className="h-full bg-white dark:bg-gray-900 border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-red-500 text-white">{article.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(article.date).toLocaleDateString("es-ES", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-red-500 transition-colors duration-200">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 line-clamp-3">{article.excerpt}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Nuestro <span className="text-red-500">Equipo</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              Tres estudiantes del Colegio Santa Luisa de Concepción, comprometidos con el desarrollo de soluciones
              tecnológicas innovadoras para el bienestar social y ambiental
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full bg-white dark:bg-gray-900 border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                    <p className="text-red-500 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{member.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center text-red-500 hover:text-red-600 transition-colors duration-200"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        <span className="text-sm">Contactar</span>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Contacta con <span className="text-red-500">Nosotros</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              ¿Interesado en conocer más sobre Hydrone? Estamos aquí para responder tus preguntas
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white dark:bg-gray-900 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                    Envíanos un Mensaje
                  </CardTitle>
                  <CardDescription>Completa el formulario y nos pondremos en contacto contigo</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nombre</label>
                      <Input placeholder="Tu nombre" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                      <Input type="email" placeholder="tu@email.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Asunto</label>
                    <Input placeholder="Asunto del mensaje" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Mensaje</label>
                    <Textarea placeholder="Escribe tu mensaje aquí..." rows={5} />
                  </div>
                  <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                    Enviar Mensaje
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Información de Contacto</h3>
                <div className="space-y-4">
                  {teamMembers.map((member, index) => (
                    <Card key={index} className="bg-white dark:bg-gray-900 p-4">
                      <div className="flex items-center space-x-4">
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 dark:text-white">{member.name}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{member.role}</p>
                        </div>
                        <a
                          href={`mailto:${member.email}`}
                          className="text-red-500 hover:text-red-600 transition-colors duration-200"
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <Card className="bg-gradient-to-br from-red-500 to-red-600 text-white">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-4">¿Listo para Innovar?</h4>
                  <p className="mb-4">
                    Únete a nosotros en la misión de proteger nuestros bosques con tecnología de vanguardia.
                  </p>
                  <Button
                    variant="secondary"
                    className="bg-white text-red-500 hover:bg-gray-100"
                    onClick={() => scrollToSection("project")}
                  >
                    Conoce Más del Proyecto
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">H</span>
                </div>
                <span className="text-xl font-bold">
                  <span className="text-red-500">Hy</span>drone
                </span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Innovación tecnológica autónoma para la detección temprana y combate eficiente de incendios forestales.
                Protegiendo nuestros bosques con tecnología sostenible.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Navegación</h4>
              <ul className="space-y-2">
                {navigationItems.slice(0, 5).map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Proyecto</h4>
              <ul className="space-y-2">
                {navigationItems.slice(5).map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Proyecto Hydrone. Todos los derechos reservados. | Colegio Santa Luisa de Concepción
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

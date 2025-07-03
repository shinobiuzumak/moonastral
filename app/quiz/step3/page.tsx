"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function Step3Page() {
  const router = useRouter()
  const currentStep = 3
  const totalSteps = 28
  const progressPercentage = (currentStep / totalSteps) * 100

  const handleBack = () => {
    router.push("/quiz")
  }

  const handleContinue = () => {
    // Navegar para a próxima página do quiz
    router.push("/quiz/step4")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-800 via-slate-700 to-slate-900 relative overflow-hidden">
      {/* Background SVG */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('/svg-image-3.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Header */}
      <header className="sticky top-0 bg-slate-800/80 backdrop-blur-sm border-b border-slate-600 z-10 relative">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Back button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={handleBack}
              className="p-2 hover:bg-slate-700 rounded-full text-white"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>

            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
              <span className="text-xl font-semibold text-white">MOONGRADE</span>
            </div>

            {/* Progress indicator */}
            <div className="text-sm text-gray-300 font-medium">
              {currentStep}/{totalSteps}
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-4">
            <Progress value={progressPercentage} className="h-2 bg-slate-600" />
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Navigate your <span className="text-yellow-400">love & personal</span> life with
            <br />
            astrology
          </h1>

          {/* Description */}
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Our personalized guidance plans go beyond just looking at your
              <br />
              Zodiac sign. We analyze your unique birth chart using
              <br />
              astronomical data from <span className="font-semibold text-white">NASA</span> and insights from{" "}
              <span className="font-semibold text-white">2.9M</span>
              <br />
              <span className="font-semibold text-white">successful users</span>.
            </p>
          </div>

          {/* Continue button */}
          <div className="flex justify-center">
            <Button
              onClick={handleContinue}
              size="lg"
              className="px-12 py-4 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-lg rounded-full transition-all duration-200 hover:scale-105"
            >
              Continue
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

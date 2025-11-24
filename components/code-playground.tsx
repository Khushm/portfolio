"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Play, Terminal, RotateCcw } from "lucide-react"
import { motion } from "framer-motion"

const DEMO_CODE = `def preprocess_data(data):
    """
    Simulates a data preprocessing pipeline.
    """
    cleaned = [d.strip().lower() for d in data if d]
    tokenized = [text.split() for text in cleaned]
    return {
        "original_count": len(data),
        "processed_count": len(cleaned),
        "sample": tokenized[0] if tokenized else []
    }

# Test data
raw_input = ["  Hello World ", "", "Machine Learning  "]
result = preprocess_data(raw_input)
print(result)`

const DEMO_OUTPUT = `{
  "original_count": 3,
  "processed_count": 2,
  "sample": ["hello", "world"]
}`

export function CodePlayground() {
  const [code, setCode] = useState(DEMO_CODE)
  const [output, setOutput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const runCode = () => {
    setIsLoading(true)
    setOutput("")

    // Simulate processing time
    setTimeout(() => {
      setOutput(DEMO_OUTPUT)
      setIsLoading(false)
    }, 800)
  }

  return (
    <section className="py-12 px-4 md:px-6 max-w-5xl mx-auto">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-2"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white font-mono">
            <span className="text-[#66fcf1]">03.5 </span>Code Playground
          </h2>
          <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-mono">
            Interact with my code directly in the browser. Test utility functions and see the output in real-time.
          </p>
        </motion.div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <Card className="bg-[#1e1e1e] border-gray-800 shadow-2xl overflow-hidden h-full">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 bg-[#252526] border-b border-white/10 p-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <CardTitle className="ml-4 text-sm font-mono text-gray-400">processor.py</CardTitle>
              </div>
              <Button
                size="sm"
                variant="ghost"
                className="h-8 w-8 p-0 text-gray-400 hover:text-white hover:bg-white/10"
                onClick={() => setCode(DEMO_CODE)}
              >
                <RotateCcw className="h-4 w-4" />
                <span className="sr-only">Reset Code</span>
              </Button>
            </CardHeader>
            <CardContent className="p-0">
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-[400px] bg-[#1e1e1e] text-gray-300 font-mono text-sm p-4 focus:outline-none resize-none"
                spellCheck={false}
              />
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center justify-between bg-[#1f2833]/50 p-4 rounded-lg border border-[#66fcf1]/20">
            <div className="space-y-1">
              <h3 className="font-semibold text-white font-mono">Execute Function</h3>
              <p className="text-sm text-gray-400 font-mono">Run the Python code to see the result.</p>
            </div>
            <Button
              onClick={runCode}
              disabled={isLoading}
              className="bg-[#1f2833] hover:bg-[#66fcf1] hover:text-[#0b0c10] text-[#66fcf1] border border-[#66fcf1] min-w-[100px] font-mono"
            >
              {isLoading ? (
                "Running..."
              ) : (
                <>
                  <Play className="mr-2 h-4 w-4" /> Run
                </>
              )}
            </Button>
          </div>

          <Card className="flex-1 bg-black border-gray-800 shadow-inner">
            <CardHeader className="py-3 px-4 border-b border-white/10 p-4">
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4 text-gray-500" />
                <CardTitle className="text-sm font-mono text-gray-500">Console Output</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-4 font-mono text-sm">
              {output ? (
                <pre className="text-[#66fcf1] whitespace-pre-wrap animate-in fade-in duration-300">
                  {">"} {output}
                </pre>
              ) : (
                <span className="text-gray-600 italic">Waiting for execution...</span>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

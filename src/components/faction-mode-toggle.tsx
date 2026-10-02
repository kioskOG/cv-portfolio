'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ShieldAlert, BookOpen, Volume2, VolumeX, Swords, Scroll } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FactionModeToggleProps {
  faction: 'blacks' | 'greens'
  setFaction: (faction: 'blacks' | 'greens') => void
  mode: 'modern' | 'westeros'
  setMode: (mode: 'modern' | 'westeros') => void
}

export function FactionModeToggle({
  faction,
  setFaction,
  mode,
  setMode,
}: FactionModeToggleProps) {
  const [isMuted, setIsMuted] = useState(true)
  const audioCtxRef = useRef<AudioContext | null>(null)

  // Initialize Audio Context on user interaction
  const initAudio = () => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume()
    }
  }

  // Synthesize a Metallic Sword Clash
  const playSwordClash = () => {
    if (isMuted) return
    initAudio()
    const ctx = audioCtxRef.current
    if (!ctx) return

    const now = ctx.currentTime

    // Main Gain
    const masterGain = ctx.createGain()
    masterGain.gain.setValueAtTime(0.2, now)
    masterGain.gain.exponentialRampToValueAtTime(0.001, now + 0.5)
    masterGain.connect(ctx.destination)

    // Metal Strike 1 (High bell-like ring)
    const osc1 = ctx.createOscillator()
    osc1.type = 'triangle'
    osc1.frequency.setValueAtTime(880, now)
    osc1.frequency.linearRampToValueAtTime(330, now + 0.25)
    
    const filter1 = ctx.createBiquadFilter()
    filter1.type = 'bandpass'
    filter1.frequency.setValueAtTime(1500, now)
    filter1.Q.setValueAtTime(8, now)

    osc1.connect(filter1)
    filter1.connect(masterGain)
    osc1.start(now)
    osc1.stop(now + 0.5)

    // Metal Strike 2 (Low scrape/impact)
    const osc2 = ctx.createOscillator()
    osc2.type = 'sawtooth'
    osc2.frequency.setValueAtTime(120, now)
    osc2.frequency.linearRampToValueAtTime(50, now + 0.15)

    const filter2 = ctx.createBiquadFilter()
    filter2.type = 'lowpass'
    filter2.frequency.setValueAtTime(400, now)

    osc2.connect(filter2)
    filter2.connect(masterGain)
    osc2.start(now)
    osc2.stop(now + 0.3)

    // Noise component for friction/spark
    const bufferSize = ctx.sampleRate * 0.15
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate)
    const data = buffer.getChannelData(0)
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1
    }
    
    const noise = ctx.createBufferSource()
    noise.buffer = buffer

    const noiseFilter = ctx.createBiquadFilter()
    noiseFilter.type = 'bandpass'
    noiseFilter.frequency.setValueAtTime(1200, now)
    noiseFilter.Q.setValueAtTime(2, now)

    const noiseGain = ctx.createGain()
    noiseGain.gain.setValueAtTime(0.3, now)
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.12)

    noise.connect(noiseFilter)
    noiseFilter.connect(noiseGain)
    noiseGain.connect(masterGain)
    
    noise.start(now)
    noise.stop(now + 0.15)
  }

  // Synthesize a Rumbling Dragon Roar / Growl
  const playDragonRoar = () => {
    if (isMuted) return
    initAudio()
    const ctx = audioCtxRef.current
    if (!ctx) return

    const now = ctx.currentTime

    const masterGain = ctx.createGain()
    masterGain.gain.setValueAtTime(0.25, now)
    masterGain.gain.exponentialRampToValueAtTime(0.001, now + 0.8)
    masterGain.connect(ctx.destination)

    // Low Frequency rumble
    const osc = ctx.createOscillator()
    osc.type = 'sawtooth'
    osc.frequency.setValueAtTime(75, now)
    // Growl modulation (LFO)
    const lfo = ctx.createOscillator()
    lfo.frequency.setValueAtTime(25, now) // rapid growl frequency
    const lfoGain = ctx.createGain()
    lfoGain.gain.setValueAtTime(20, now) // modulation depth

    // Distort noise component
    const noiseLength = ctx.sampleRate * 0.7
    const noiseBuffer = ctx.createBuffer(1, noiseLength, ctx.sampleRate)
    const noiseData = noiseBuffer.getChannelData(0)
    for (let i = 0; i < noiseLength; i++) {
      noiseData[i] = Math.random() * 2 - 1
    }
    const noiseSrc = ctx.createBufferSource()
    noiseSrc.buffer = noiseBuffer

    const filter = ctx.createBiquadFilter()
    filter.type = 'bandpass'
    filter.frequency.setValueAtTime(120, now)
    filter.Q.setValueAtTime(1.5, now)

    lfo.connect(lfoGain)
    lfoGain.connect(osc.frequency) // Modulate pitch for growling effect
    
    osc.connect(filter)
    noiseSrc.connect(filter)
    filter.connect(masterGain)

    lfo.start(now)
    osc.start(now)
    noiseSrc.start(now)

    lfo.stop(now + 0.8)
    osc.stop(now + 0.8)
    noiseSrc.stop(now + 0.8)
  }

  // Synthesize a Fire Crackle / Ember Spark
  const playFireCrackle = () => {
    if (isMuted) return
    initAudio()
    const ctx = audioCtxRef.current
    if (!ctx) return

    const now = ctx.currentTime

    // Short crackling burst
    const masterGain = ctx.createGain()
    masterGain.connect(ctx.destination)

    const pops = 3
    for (let i = 0; i < pops; i++) {
      const popTime = now + Math.random() * 0.25
      const popGain = ctx.createGain()
      popGain.gain.setValueAtTime(0.06, popTime)
      popGain.gain.exponentialRampToValueAtTime(0.001, popTime + 0.05)
      popGain.connect(masterGain)

      const osc = ctx.createOscillator()
      osc.type = 'triangle'
      osc.frequency.setValueAtTime(Math.random() * 150 + 100, popTime)
      osc.connect(popGain)
      osc.start(popTime)
      osc.stop(popTime + 0.05)
    }
  }

  const handleFactionChange = (newFaction: 'blacks' | 'greens') => {
    if (newFaction === faction) return
    setFaction(newFaction)
    playSwordClash()
  }

  const handleModeChange = (newMode: 'modern' | 'westeros') => {
    if (newMode === mode) return
    setMode(newMode)
    if (newMode === 'westeros') {
      playDragonRoar()
    } else {
      playSwordClash()
    }
  }

  const handleMuteToggle = () => {
    const nextMuted = !isMuted
    setIsMuted(nextMuted)
    // If unmuting, initialize audio context and play a small verification sound
    if (!nextMuted) {
      setTimeout(() => {
        initAudio()
        // Play a soft metal ring verifying sound is enabled
        const ctx = audioCtxRef.current
        if (ctx) {
          const now = ctx.currentTime
          const osc = ctx.createOscillator()
          const gain = ctx.createGain()
          osc.frequency.setValueAtTime(440, now)
          gain.gain.setValueAtTime(0.08, now)
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3)
          osc.connect(gain)
          gain.connect(ctx.destination)
          osc.start(now)
          osc.stop(now + 0.3)
        }
      }, 50)
    }
  }

  // Periodic subtle ember sound while Westeros mode is on
  useEffect(() => {
    if (isMuted || mode !== 'westeros') return

    const interval = setInterval(() => {
      if (Math.random() > 0.4) {
        playFireCrackle()
      }
    }, 1800)

    return () => clearInterval(interval)
  }, [isMuted, mode])

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between w-full max-w-4xl mx-auto p-4 rounded-2xl border border-border/40 bg-card/60 backdrop-blur-md shadow-md animate-fade-in print:hidden mb-4 relative z-20">
      {/* Alliance Selection */}
      <div className="flex flex-col gap-1.5 flex-1">
        <label className="text-[10px] font-mono tracking-widest text-muted-foreground uppercase flex items-center gap-1">
          <ShieldAlert className="size-3 text-primary" /> Pledge Your Alliance
        </label>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => handleFactionChange('blacks')}
            className={cn(
              "relative px-4 py-2.5 rounded-xl font-cinzel text-xs font-bold tracking-wider uppercase border transition-all duration-300 overflow-hidden flex items-center justify-center gap-1.5",
              faction === 'blacks'
                ? "bg-red-950/20 text-red-500 border-red-500/50 shadow-[0_0_12px_rgba(239,68,68,0.25)]"
                : "border-border/60 hover:border-red-500/30 hover:text-red-500/80 text-muted-foreground bg-background/20"
            )}
          >
            {faction === 'blacks' && (
              <span className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-amber-600/5 animate-pulse pointer-events-none" />
            )}
            <Swords className="size-3.5" />
            House Targaryen (Blacks)
          </button>
          <button
            onClick={() => handleFactionChange('greens')}
            className={cn(
              "relative px-4 py-2.5 rounded-xl font-cinzel text-xs font-bold tracking-wider uppercase border transition-all duration-300 overflow-hidden flex items-center justify-center gap-1.5",
              faction === 'greens'
                ? "bg-emerald-950/20 text-emerald-500 border-emerald-500/50 shadow-[0_0_12px_rgba(16,185,129,0.25)]"
                : "border-border/60 hover:border-emerald-500/30 hover:text-emerald-500/80 text-muted-foreground bg-background/20"
            )}
          >
            {faction === 'greens' && (
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-yellow-600/5 animate-pulse pointer-events-none" />
            )}
            <ShieldAlert className="size-3.5" />
            House Hightower (Greens)
          </button>
        </div>
      </div>

      {/* Mode / Lore & Sound Control */}
      <div className="flex items-center gap-3 justify-between sm:justify-end mt-2 sm:mt-0">
        {/* Lore / Modern Toggle */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-mono tracking-widest text-muted-foreground uppercase flex items-center gap-1">
            <BookOpen className="size-3 text-primary" /> Chronicles Mode
          </label>
          <div className="flex rounded-xl bg-background/40 border border-border/50 p-1">
            <button
              onClick={() => handleModeChange('modern')}
              className={cn(
                "px-3 py-1.5 rounded-lg text-xs font-medium font-mono transition-all duration-200 flex items-center gap-1",
                mode === 'modern'
                  ? "bg-primary text-primary-foreground shadow-sm font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Scroll className="size-3" />
              Modern CV
            </button>
            <button
              onClick={() => handleModeChange('westeros')}
              className={cn(
                "px-3 py-1.5 rounded-lg text-xs font-medium font-cinzel transition-all duration-200 flex items-center gap-1",
                mode === 'westeros'
                  ? "bg-primary text-primary-foreground shadow-sm font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Swords className="size-3" />
              Westeros Lore
            </button>
          </div>
        </div>

        {/* Audio Toggle */}
        <div className="flex flex-col gap-1.5 items-end justify-center self-end">
          <button
            onClick={handleMuteToggle}
            className={cn(
              "size-10 rounded-xl flex items-center justify-center border transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm mt-5",
              isMuted
                ? "border-border/60 text-muted-foreground bg-background/20"
                : faction === 'blacks'
                ? "border-red-500/40 text-red-500 bg-red-950/10 shadow-[0_0_8px_rgba(239,68,68,0.15)]"
                : "border-emerald-500/40 text-emerald-500 bg-emerald-950/10 shadow-[0_0_8px_rgba(16,185,129,0.15)]"
            )}
            title={isMuted ? "Unmute Sounds" : "Mute Sounds"}
            aria-label={isMuted ? "Unmute Sound Effects" : "Mute Sound Effects"}
          >
            {isMuted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
          </button>
        </div>
      </div>
    </div>
  )
}

"use client"
import React, { useEffect, useRef } from 'react'

function MatrixBG() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return
        let width = (canvas.width = window.innerWidth)
        let height = (canvas.height = window.innerHeight)
        let columns = Math.floor(width / 20)
        
        const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+{}|:<>?[];',./"
        const charArray = characters.split('')
        let drops: number[] = []

        for (let i = 0; i < columns; i++) {
            drops[i] = 1
        }

        let frameRate = 25; 
        let lastFrameTime = Date.now();

        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.04)'
            ctx.fillRect(0, 0, width, height)
            ctx.fillStyle = '#0F0'
            ctx.font = '15px monospace'

            for (let i = 0; i < drops.length; i++) {
                let text = charArray[Math.floor(Math.random() * charArray.length)]
                ctx.fillText(text, i * 20, drops[i] * 20)
                if (drops[i] * 20 > height && Math.random() > 0.975) {
                    drops[i] = 0
                }
                drops[i]++
            }
        }

        const animate = () => {
            const currentTime = Date.now()
            const ellapsedTime = currentTime - lastFrameTime
            if (ellapsedTime > 1000 / frameRate) {
                draw()
                lastFrameTime = currentTime
            }
            requestAnimationFrame(animate)
        }
        animate()

            const handleResize = () => {
                width = canvas.width = window.innerWidth
                height = canvas.height = window.innerHeight
                columns = Math.floor(width / 20)
                drops = []
                for (let i = 0; i < columns; i++) {
                    drops[i] = 1
                }
            }

            const isMobileDevice = /Mobi/i.test(window.navigator.userAgent)
            if (!isMobileDevice) {
                window.addEventListener('resize', handleResize)
            }

            return () => {
                if (!isMobileDevice) {
                    window.addEventListener('resize', handleResize)
                }
        }

        animate()

    })
  return (
    <canvas ref={canvasRef} className='fixed top-0 left-0 -z-10'/>
  )
}

export default MatrixBG
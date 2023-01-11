import { useRouter } from 'next/router'
import React from 'react'

function ShareButton({ data }) {
    const route = useRouter()
    const handleShare = () => {
        navigator.share({
            title: data.title,
            url: `https://bigo-calculator.vercel.app${route.pathname}`,
        text:`Para Compensar un ${data.percentage} de ${data.type} se requiere de ${data.balance_seeds} diamantes.`})
    }
    return (
        
            <button className="bg-red-500 text-slate-100 py-2 px-4" onClick={handleShare}>Compartir Resultado</button>
        
  )
}

export default ShareButton
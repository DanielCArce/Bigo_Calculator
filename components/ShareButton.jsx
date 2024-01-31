import React from 'react'
import {toBlob} from 'html-to-image'
function ShareButton({ data, img }) {
    //const route = useRouter()
    const handleShare = () => {
        toBlob(img.current).then((blob) => {
            const file = new File([blob], 'estimation.png', { type: 'image/png' });
            navigator.share({
            title: data.title,
            url: `https://bigo-calculator.vercel.app`,
            text: `Para Compensar un ${data.percentage} de ${data.type} se requiere de ${data.balance_seeds} diamantes.`,
            text: `Para Compensar un ${data.percentage} de ${data.type} se requiere de ${Math.ceil(data.balance_seeds)} diamantes.`,
            files: [file]
            })
        })
    }
    return (<button className="bg-red-500 text-slate-100 py-2 px-4" onClick={handleShare}>Compartir Resultado</button>)
}

export default ShareButton
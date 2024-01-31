import React from 'react'
import {toBlob} from 'html-to-image'
function ShareButton({ data, img }) {
    //const route = useRouter()
    const handleShare = () => {
        const tempfile = toBlob(img.current).then((blob) => new File([blob], 'estimations.png', { type: 'image/png' }))
        navigator.share({
                        files: [tempFile],
                        text: `Detalles del calculo de ${data.type}`,
                        title: `Detalle Calculo`,
                        url:'https://bigo-calculator.vercel.app'
                    })
        // Notification.requestPermission().then((permission) => {
        //     if (permission == "granted") {
        //         const noty = new Notification('Listo para compartir', { body: 'Imagen Generada exitosamente' })
        //         noty.addEventListener('close', (e) => {
        //             navigator.share({
        //                 files: [tempFile],
        //                 text: `Detalles del calculo de ${data.type}`,
        //                 title: `Detalle Calculo`,
        //                 url:'https://bigo-calculator.vercel.app'
        //             })
        //         })
        //     }
        // })
    }
    return (<button className="bg-red-500 text-slate-100 py-2 px-4" onClick={handleShare}>Compartir Resultado</button>)
}

export default ShareButton
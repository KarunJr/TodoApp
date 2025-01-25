import { Facebook, GithubIcon, Instagram } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-slate-600 w-full max-w-screeen py-1 fixed bottom-0 flex gap-32 sm:flex sm:justify-between md:flex md:justify-between lg:flex lg:justify-between'>
                <div className='flex flex-row gap-4 mx-2 sm:mx-3 md:mx-8'>
                <a href="https://www.facebook.com/karun.ghimire.71" target='_blank' className='transition-all duration-500 hover:scale-150 invert'><Facebook/></a>
                <a href="https://www.instagram.com/_karunghimire_/" target='_blank' className='transition-all duration-500 hover:scale-150 invert'><Instagram/></a>
                <a href="https://github.com/KarunJr" target='_blank' className='transition-all duration-500 hover:scale-150 invert'><GithubIcon/></a>
                </div>
                <span className='font-serif text-sm sm:mr-7 md:mr-8 text-slate-300'>&copy; 2025 Copyright. Designed by Karun</span>
            
        </footer>
    )
}

export default Footer

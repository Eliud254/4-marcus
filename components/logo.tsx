import Image from 'next/image'

interface LogoProps {
    className?: string
    dark?: boolean
}

const Logo = ({ className = '', dark = false }: LogoProps) => {
    return (
        <div className={`relative ${className}`}>
            <Image
                src="/logo.png"
                alt="4MARCUS Consulting"
                width={610}
                height={130}
                className={`h-32 w-auto object-contain ${dark ? 'brightness-0 invert' : ''}`}
                priority
            />
        </div>
    )
}

export default Logo

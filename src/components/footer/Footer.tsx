import { DevToLogo, GithubLogo, LinkedinLogo, Mailbox } from '@phosphor-icons/react'

function Footer() {
    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-[#0e1114] text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                        &copy; {data}, Flávio Farias.
                    </p>
                    <div className='flex gap-5 mt-5'>
                        <a href="https://www.linkedin.com/in/flaviosfarias/" target='_blank'>
                            <LinkedinLogo size={48} weight='bold' className='hover:scale-110 hover:text-[#ffffff]/50 duration-150'/>
                        </a>
                        <a href="https://github.com/oFurabio" target='_blank'>
                            <GithubLogo size={48} weight='bold' className='hover:scale-110 hover:text-[#ffffff]/50 duration-150'/>
                        </a>
                        <a href="https://flaviofarias.vercel.app/" target='_blank'>
                            <DevToLogo size={48} weight='bold' className='hover:scale-110 hover:text-[#ffffff]/50 duration-150'/>
                        </a>
                        <a href="mailto:fs.flaviosilv4@gmail.com" target='_blank'>
                            <Mailbox size={48} weight='bold' className='hover:scale-110 hover:text-[#ffffff]/50 duration-150'/>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
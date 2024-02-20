import React, {useState} from 'react'

export default function ProfileCard() {

    const [isHovered, setIsHovered] = useState(false);

    const handlerEnter = () => {
        setTimeout(() => {
            setIsHovered(true)
        }, 200);
    }

    const handleLeave = () => {
        setIsHovered(false)
    }


  return (
    <>
        {/* <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="group h-96 w-96 [perspective:1000px]">
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-300 [tranform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
                onMouseEnter={handlerEnter}
                onMouseLeave={handleLeave}
                >
                    <div className="absolute inset-0 [backface-visibility:hidden]">
                        <img src="../../../public/images/wallpaper.jpg" alt="profile-image"  
                            className='h-full w-full rounded-xl object-cover shadow-xl shadow-black/70'
                        />
                    </div>
                    { isHovered && (<div className="absolute inset-0 shadow-black bg-black/75 h-full w-full text-center [transform:rotateY(180deg)] "  >
                        <div className="min-h-full flex justify-center items-center flex-col">
                            <h1 className="text-white">Jhon Dow</h1>
                            <p className="text-lg text-slate-200">Developer</p>
                        </div>
                    </div>) }
                </div>
            </div>
        </div> */}

        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="group h-96 w-96 [perspective:1000px]">
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-300 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] "
                >
                    <div className="absolute inset-0">
                        <img src="../../../public/images/wallpaper.jpg" alt="profile-image"  
                            className='h-full w-full rounded-xl object-cover shadow-xl shadow-black/70'
                        />
                    </div>
                    <div className="absolute inset-0 shadow-black bg-black/75 h-full w-full text-center [transform:rotateY(180deg)] back-visible-hidden"  >
                        <div className="min-h-full flex justify-center items-center flex-col">
                            <h1 className="text-white">Jhon Dow</h1>
                            <p className="text-lg text-slate-200">Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

// ${isHovered}? '': ''
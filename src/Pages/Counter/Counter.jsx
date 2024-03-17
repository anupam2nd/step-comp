import React from 'react'
import CountUp from 'react-countup'
import './Counter.css'


export default function Counter() {
    return (
        <>
            <div className="h-screen w-full flex flex-col justify-center items-center mx-auto animate-fadein [animation-delay:'5s']">
                <div className="h-2/3 w-2/3 bg-gradient-to-t from-slate-400 to-slate-200 shadow-md rounded-md">
                    <CountUp start={-875.039}
                        end={160527.012}
                        duration={2.75} >
                        {({ countUpRef }) => (
                            <div>
                                <span ref={countUpRef} className='font-samibold'/>

                            </div>
                        )}
                    </CountUp>
                </div>
            </div>
            <div className="h-screen w-full flex flex-col justify-center items-center mx-auto onscroll">
                <div className="h-2/3 w-2/3 bg-gradient-to-t from-slate-400 to-slate-200 shadow-md rounded-md">
                    {/* <CountUp start={-875.039}
                        end={160527.012}
                        duration={2.75} 
                        useIndianSeparators= {true}
                        enableScrollSpy={true}
                        scrollSpyDelay={1000}
                        scrollSpyOnce={true}>
                        {({ countUpRef, start }) => (
                            <div>
                                <span ref={countUpRef} className='font-samibold'/>
                                <button onClick={start}>Start</button>
                            </div>
                        )}
                    </CountUp> */}
                </div>
            </div>
        </>
    )
}

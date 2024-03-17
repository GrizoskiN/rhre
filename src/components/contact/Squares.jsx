

export default function Squares({benefits}){
    return (
        <div className="w-11/12 max-w-[1400px] m-auto my-11 lg:my-32">
           
        <h3 className="text-2xl uppercase">Modern lifestyle</h3>
        <h1 className="text-4xl lg:text-6xl lg:leading-[4rem] lg:w-2/3 font-bold">What does the 360 Riverside Crescent project offer?</h1>
        <div className="grid lg:grid-cols-2 mt-16 gap-5">
            {benefits.map(({id, title, text, }, index) => (
                <ul key={id} className={`${id === 1 || id === 2 ? 'bg-royal text-white' : ''}  bg-gray-200 text-royal px-5 py-11 rounded-xl`}>
                    <li>
                    <h1 className="font-bold text-3xl">{title}</h1>
                    <p className="mt-5">{text}</p>
                    </li>

                </ul>
            ))}
            </div>
        </div>
    )
}
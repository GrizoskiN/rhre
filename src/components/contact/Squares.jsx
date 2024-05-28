

export default function Squares(){

    const benefits = [
        {
          id: 0,
          title: "Rental income",
          text: "With rent prices in Dubai soaring by 28.5% over the past year, investing in rental properties has become increasingly lucrative. A serene, family-friendly neighborhood with parks, schools, and shopping areas is particularly attractive to families, couples, and individuals seeking long-term rentals. Both apartments and townhouses in such areas are in high demand. By employing a property management company to handle maintenance and tenant relations, you can enjoy a steady income stream with minimal effort, allowing you to sit back and relax.",
        },
        {
          id: 1,
          title: "Resale after handover",
          text: "Reselling a property in Dubai after handover can be highly profitable. With property values appreciating by 15-30% annually on average, it's a smart move for investors looking to capitalize on market growth. A newly handed-over property is often more attractive to buyers, ensuring you get the best possible price. Utilizing a real estate agency to handle the sale can streamline the process, ensuring a hassle-free transaction while you enjoy the returns on your investment.",
        },
        {
          id: 2,
          title: "Flip deal",
          text: "A flip deal involves buying a property, renovating it, and selling it for a profit. In Dubai, this strategy can yield substantial returns due to the city's booming real estate market. The key to a successful flip deal is choosing the right property and making cost-effective improvements that significantly boost its market value. By partnering with experienced contractors and real estate agents, you can maximize your profits while minimizing the time your investment is tied up.",
        },
        {
          id: 3,
          title: "Investment for living in Dubai",
          text: "Investing in property to live in Dubai offers both a luxurious lifestyle and potential financial gains. With world-class amenities, vibrant communities, and a cosmopolitan environment, Dubai is an attractive destination for expatriates and locals alike. Owning a home in Dubai not only provides a stable living environment but also positions you to benefit from the city's growing property market. Enjoy the benefits of a high-quality lifestyle while your property's value appreciates over time.",
        },
      ];
    
    return (
        <div className="w-11/12 max-w-[1200px] m-auto my-11 lg:my-32">
           
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
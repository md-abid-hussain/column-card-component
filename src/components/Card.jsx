const Card = ({ image, title, desc, theme }) => {

    return (
        <section
            className={`p-[48px] text-white
             ${title === 'sedans' ? 'bg-[#e38826] text-[#e38826]' : title === 'suvs' ? 'bg-[#006970] text-[#006970]' : title === 'luxury' ? 'bg-[#004241] text-[#004241]' : ''}`
            }
        >
            <img src={image} />
            <h2 className="uppercase text-[36px] mb-[36px] mt-[40px] text-white">{title}</h2>
            <p className="mb-[86px] text-white">{desc}</p>
            <a href="#"
                className={`bg-white px-[32px] py-[18px] `}
            >Learn More</a>
        </section>
    )
}

export default Card
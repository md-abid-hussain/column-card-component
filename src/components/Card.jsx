const Card = ({ image, title, desc, theme }) => {

    return (
        <section
            className={`p-[48px] text-white flex-1
             ${title === 'sedans' ? 'sedans' : title === 'suvs' ? 'suvs' : title === 'luxury' ? 'luxury' : ''}`
            }
        >
            <img src={image} />
            <h2 className="uppercase text-[36px] mb-[36px] mt-[40px] text-white">{title}</h2>
            <p className="mb-[86px] text-white">{desc}</p>
            <a href="#"
                className={`bg-white px-[28px] py-[14px] rounded-full border-4 border-[white] hover:text-[white] 
                ${title === 'sedans' ? 'hover:bg-[#e38826] text-[#e38826]' : title === 'suvs' ? 'hover:bg-[#006970] text-[#006970]' : title === 'luxury' ? 'hover:bg-[#004241] text-[#004241]' : ''}                
                `}
            >Learn More</a>
        </section>
    )
}

export default Card
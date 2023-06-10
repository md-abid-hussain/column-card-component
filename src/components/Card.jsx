const Card = ({ image, title, desc }) => {

    return (
        <section
            className={`p-[48px] text-[#f2f2f2] flex-1
             ${title === 'sedans' ? 'sedans' : title === 'suvs' ? 'suvs' : title === 'luxury' ? 'luxury' : ''}`
            }
        >
            <img src={image} />
            <h2 className="uppercase text-[36px] mb-[36px] mt-[40px] text-[#f2f2f2]">{title}</h2>
            <p className="mb-[86px] text-[#ffffffbf] text-[17px]">{desc}</p>
            <a href="#"
                className={`bg-[#f2f2f2] px-[28px] py-[14px] rounded-full border-4 border-[#f2f2f2] hover:text-[#f2f2f2] 
                ${title === 'sedans' ? 'hover:bg-[#e38826] text-[#e38826]' : title === 'suvs' ? 'hover:bg-[#006970] text-[#006970]' : title === 'luxury' ? 'hover:bg-[#004241] text-[#004241]' : ''}                
                `}
            >Learn More</a>
        </section>
    )
}

export default Card
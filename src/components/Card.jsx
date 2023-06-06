const Card = ({ image, title, desc, theme }) => {

    return (
        <section className={`p-[48px] bg-[${theme}] text-white`}>
            <img src={image} />
            <h2 className="uppercase text-[36px] mb-[36px] mt-[40px]">{title}</h2>
            <p className="mb-[86px]">{desc}</p>
            <a href="#" className={`bg-white text-[${theme}] px-[32px] py-[18px]`}>Learn More</a>
        </section>
    )
}

export default Card
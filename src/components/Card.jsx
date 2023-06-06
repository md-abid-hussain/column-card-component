const Card = ({ image, title, desc }) => {
    return (
        <section>
            <img src={image} />
            <h2>{title}</h2>
            <p>{desc}</p>
        </section>
    )
}

export default Card
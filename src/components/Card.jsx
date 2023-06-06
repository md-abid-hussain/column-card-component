const Card = ({ image, title, desc }) => {
    return (
        <section>
            <img src={image} />
            <h2>{title}</h2>
            <p>{desc}</p>
            <a href="#">Learn More</a>
        </section>
    )
}

export default Card
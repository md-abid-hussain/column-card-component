import data from '../data/data'
import Card from './Card'

const Component = () => {
    return (
        <section>
            {data.map(ele => (<Card image={ele.image} title={ele.title} desc={ele.desc} key={ele.title} />))}
        </section>
    )
}

export default Component
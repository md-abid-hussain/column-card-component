import data from '../data/data'
import Card from './Card'

const Component = () => {

    const sedanTheme = "bg-[#e38826]"
    const suvTheme = "bg-[#e38826]"
    const luxuryTheme = "bg-[#e38826]"

    return (
        <section className='flex max-w-[920px]'>
            {data.map(ele => (<Card image={ele.image} title={ele.title} desc={ele.desc} key={ele.title} />))}
        </section>
    )
}

export default Component
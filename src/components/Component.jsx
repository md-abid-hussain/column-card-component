import data from '../data/data'
import Card from './Card'

const Component = () => {

    return (
        <section className='flex flex-col max-w-[327px] lg:flex-row lg:max-w-[981px]'>
            {
                data.map(ele => (<Card image={ele.image}
                    title={ele.title}
                    desc={ele.desc}
                    key={ele.title}
                    theme={ele.theme}
                />)
                )
            }
        </section>
    )
}

export default Component
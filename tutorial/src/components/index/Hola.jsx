import Card from "../Card"
import Mundo from "./Mundo"

const miElemento = <h1>Hola</h1>

// Map posts
const posts = [
    {
        title: 'Boost your conversion rate',
        href: '#',
        category: { name: 'Article', href: '#' },
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        imageUrl:
            'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        readingTime: '6 min',
        author: {
            name: 'Roel Aufderehar',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1669187737670-921c6137a033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80',
        },
    },
    {
        title: 'How to use search engine optimization to drive sales',
        href: '#',
        category: { name: 'Video', href: '#' },
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores',
        date: 'Mar 10, 2020',
        datetime: '2020-03-10', imageUrl:
            'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        readingTime: '4 min',
        author: {
            name: 'Brenna Goyette',
            href: '#', imageUrl:
                'https://images.unsplash.com/photo-1669187737670-921c6137a033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80'
        },
    },
    {
        title: 'Improve your customer experience',
        href: '#',
        category: {
            name: 'Case Study', href: '#',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum volupta',
            date: 'Feb 12, 2020',
            datetime: '2020-02-12',
            imageUrl:
                'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            readingTime: '11 min',
            author: {
                name: 'Daniela Metz',
                href: '#',
                imageUrl:
                    'https://images.unsplash.com/photo-1669187737670-921c6137a033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80'
            },
        },
    }
]


// Props
const Hola = ({
    numero1,
    numero2
}) => {

    const elemento = (e) => {
        e.preventDefault()
        console.log(numero1 + numero2)
    }

    let titulo = "Hola"

    return (
        <>
            {miElemento}
            <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                {
                    posts ?
                        posts.map(post => (
                            <Card
                                title={post.title}
                                href={post.href}
                                category={post.category}
                                description={post.description}
                                date={post.date}
                                datetime={post.datetime}
                                imageUrl={post.imageUrl}
                                readingTime={post.readingTime}
                                author={post.author}
                            />
                        )) : <>Loading...</>
                }
            </div>
            <Mundo numero1={numero1} numero2={numero2} />
            <button
                onClick={e => elemento(e)}
                className="bg-blue-400 p-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Sumar
            </button>
        </>
    )
}

export default Hola
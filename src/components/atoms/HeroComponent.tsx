import { FC } from 'react'

export const HeroComponent: FC = () => {
    return (
        <section className="bg-white dark:bg-gray-900 relative">

            <div className="flex justify-center mt-10 absolute top-0 w-full h-full">
                <img className="object-cover w-full h-96 rounded-xl lg:w-4/5" alt="" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" />
            </div>
            <div className="container relative px-6 py-40 mx-auto text-center z-10">
                <div className="max-w-lg mx-auto">
                    <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Building Your Next App with our Awesome components</h1>
                    <p className="mt-6 text-gray-500 dark:text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero similique
                        obcaecati illum mollitia.</p>
                    <button className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">
                        Start 14-Day free trial
                    </button>
                    <p className="mt-3 text-sm text-gray-400 ">No credit card required</p>
                </div>
            </div>
        </section>
    )
}
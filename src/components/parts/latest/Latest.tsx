import React from 'react'

function Latest() {
  return (
<section className="bg-white dark:bg-gray-900">
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="grid grid-cols-2 gap-4 mt-8">
            <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
            <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
        </div>
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">We expect you on the biggest summer event</h2>
            <p className="mb-4">React Summit is an annual conference about the React ecosystem, modern web development, and the growing impact of AI on it, gathering thousands of Front-end and Full-stack engineers from around the world.  </p>
            <p>Join us in Amsterdam, or take part in an interactive Remote experience with hybrid speaker Q&A, discussion rooms, and online practical workshops.</p>
        </div>

    </div>
</section>
  )
}

export default Latest

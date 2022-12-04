const Card = ({titulo}) => {
    return (
        <div class="flex flex-col rounded-1g shadow-lg overflow-hidden">
            <div class="flex-shrink-0">
                <img class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"></img>
            </div>
            <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                <div class="flex-1">
                    <p class="text-sm font-medium text-indigo-600">
                        <a href="#" class="hover:underline">
                            Article
                        </a>
                    </p>
                    <a href="#" class="block mt-2">
                        <p class="text-xl font-semibold text-gray-900">
                            {titulo}
                        </p>
                        <p class="mt-3 text-base text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accu
                        </p>
                    </a>
                </div>
                <div class="mt-6 flex items-center">
                    <div class="flex-shrink-0">
                        <a href="#">
                            <span class="sr-only">Roel Aufderehar</span>
                            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1669187737670-921c6137a033?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80"></img>
                        </a>
                    </div>
                    <div class="ml-3">
                        <p class="text-sm font-medium text-gray-900">
                            <a href="#" class="hover:underline">
                                Roel Aufderehar
                            </a>
                        </p>
                        <div class="flex space-x-1 text-sm text-gray-500">
                            <time datetime="2020-03-16">
                                Mar 16, 2020
                            </time>
                            <span aria-hidden="true">
                                &middot;
                            </span>
                            <span>
                                6 min read
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
import { useState, useEffect } from "react"


export default function Form() {

    const [user, setuser] = useState()
    const [search, setsearch] = useState()

    function handelSubmit(event) {

        const { fname, lname, email, city } = event.target

        fetch('https://wild-puce-capybara-hat.cyclic.app/form', {
            method: 'POST',
            body: JSON.stringify({
                name: fname.value + " " + lname.value,
                email: email.value,
                city: city.value
            })
        })
        window.location.replace('/')
    }

    async function fetchUser() {
        const data = await fetch('https://wild-puce-capybara-hat.cyclic.app/user')
        const response = await data.json()
        setuser(response)
    }

    useEffect(() => {
        fetchUser()
    }, [])


    async function handelSearch(event) {
        event.preventDefault()
        let data = await fetch(`https://wild-puce-capybara-hat.cyclic.app/search/${event.target.search.value}`)
        let response = await data.json()
        setsearch(response)
    }




    return (
        <>
            <div className="m-10">
                <div className="hidden sm:block" aria-hidden="true">
                    <div className="py-5">
                        <div className="border-t border-gray-200" />
                    </div>
                </div>
                <div className="mt-10 sm:mt-0">
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                        <div className="md:col-span-1">
                            <div className="px-4 sm:px-0">
                                <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
                                <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
                            </div>
                        </div>
                        <div className="mt-5 md:col-span-2 md:mt-0">
                            <form onSubmit={handelSubmit}>
                                <div className="overflow-hidden shadow sm:rounded-md">
                                    <div className="bg-white px-4 py-5 sm:p-6">
                                        <div className="grid grid-cols-6 gap-6">
                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                    First name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="fname"
                                                    id="first-name"
                                                    autoComplete="given-name"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    required={true}
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                    Last name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="lname"
                                                    id="last-name"
                                                    autoComplete="family-name"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    required={true}
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-4">
                                                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                    Email address
                                                </label>
                                                <input
                                                    type="text"
                                                    name="email"
                                                    id="email-address"
                                                    autoComplete="email"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    required={true}
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                                    City
                                                </label>
                                                <input
                                                    type="text"
                                                    name="city"
                                                    id="city"
                                                    autoComplete="address-level2"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    required={true}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                        <button
                                            type="submit"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="m-10">
                <div>
                    <section class="text-gray-600 body-font">
                        <div class="container flex flex-wrap px-5 mx-auto items-center">
                            <div class="md:w-1/2 md:pr-12 md:py-8 md:mb-0 pb-10">
                                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Users</h1>
                                <p class="leading-relaxed text-base">A list of all the users in the database including their name, email and city.</p>
                            </div>
                        </div>
                    </section>
                </div>
                <div>
                    <div class="w-full flex justify-end">
                        <form onSubmit={handelSearch} class="w-1/4">
                            <label for="simple-search" class="sr-only">Search</label>
                            <div class="relative w-full">
                                <div class="flex absolute bg-blue-700 rounded-md inset-y-0 right-0 items-center px-3 cursor-pointer">
                                    <button type="submit">
                                        <svg class="w-5 h-5 text-white dark:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                    </button>
                                </div>
                                <input name="search" type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search _id" required />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full text-center">
                                    <thead className="border-b bg-gray-800">
                                        <tr>
                                            <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                                _id
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                                Name
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                                Email
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                                City
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {search ? <tr className="bg-white border-b">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{search._id}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{search.name}</td>
                                            <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                                {search.email}
                                            </td>
                                            <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                                {search.city}
                                            </td>
                                        </tr> : user ? user.map((item) => {
                                            return (<tr className="bg-white border-b">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item._id}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                                                <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                                    {item.email}
                                                </td>
                                                <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                                    {item.city}
                                                </td>
                                            </tr>)

                                        }) : null}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

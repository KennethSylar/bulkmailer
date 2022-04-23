import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import {Head, Link} from '@inertiajs/inertia-react';

export default function Index(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Contacts in list</h2>}
        >
            <Head title="Contact List" />

            <div className="py-12 px-2">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <Link role="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href={route('contact-list')}>Back to Contact List</Link>
                        </div>
                    </div>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mt-4">
                        <div className="p-6 bg-white border-b border-gray-200">
                            {
                                props.contacts !== undefined ? (
                                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                            <thead className="text-center text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                <tr>
                                                    <th scope="col" class="px-6 py-3">#</th>
                                                    <th scope="col" class="px-6 py-3">Name</th>
                                                    <th scope="col" class="px-6 py-3">Surname</th>
                                                    <th scope="col" class="px-6 py-3">Email</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                props.contacts.map(
                                                    (list, index) => (
                                                        <tr key={index} className="text-center bg-white border-t dark:border-gray-700">
                                                            <td class="px-6 py-4">{index+1}</td>
                                                            <td class="px-6 py-4">{list.name}</td>
                                                            <td class="px-6 py-4">{list.lastname}</td>
                                                            <td class="px-6 py-4">{list.email}</td>
                                                        </tr>
                                                    )
                                                )
                                            }
                                            </tbody>
                                        </table>
                                    </div>
                                ) : (
                                    'nada'
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}

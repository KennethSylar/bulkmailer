import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import {Head, Link} from '@inertiajs/inertia-react';

export default function Index(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Manage Email Index</h2>}
        >
            <Head title="Campaigns" />

            <div className="py-12 px-2">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <Link role="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href={route('new-campaign')}>Create Campaign</Link>
                        </div>
                    </div>

                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mt-4">
                        <div className="p-6 bg-white border-b border-gray-200">
                            Display running campaigns
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}

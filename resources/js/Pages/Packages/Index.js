import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import Button from "@/Components/Button";

export default function Index(props) {
    const { activePackage, setData, post, processing, errors, reset } = useForm({
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('update-package'));
    };
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Manage Email Package</h2>}
        >
            <Head title="Subscriptions" />

            <div className="py-12 px-2">
                {
                    props.activePackage !== null ? (
                        <div className="m-4 max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <div className="p-6 bg-white border-b border-gray-200  shadow-sm sm:rounded-lg my-4">
                                <Link role="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href={route('change-subscription')}>Change Subscription</Link>
                            </div>
                            <ValidationErrors errors={errors}/>
                            <form onSubmit={submit}>
                                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg"   >

                                    <div className="p-6 bg-white border-b border-gray-200">
                                        <h4>Current Package</h4>
                                        <div>
                                            <Label forInput="name" value="Name"/>

                                            <Input
                                                type="text"
                                                name="name"
                                                value={props.activePackage.name}
                                                className="mt-1 block w-full"
                                                autoComplete="name"
                                                isFocused={false}
                                                   disabled
                                                handleChange={onHandleChange}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <Label forInput="price" value="Price"/>

                                            <Input
                                                type="text"
                                                name="price"
                                                value={`R ` + props.activePackage.price}
                                                className="mt-1 block w-full"
                                                autoComplete="lastname"
                                                isFocused={false}
                                                disabled
                                                handleChange={onHandleChange}
                                                required
                                            />
                                        </div>

                                        <div>
                                            <Label forInput="count" value="Email Count"/>

                                            <Input
                                                type="text"
                                                name="price"
                                                value={props.activePackage.email_count}
                                                className="mt-1 block w-full"
                                                autoComplete="count"
                                                isFocused={false}
                                                disabled
                                                handleChange={onHandleChange}
                                                required
                                            />
                                        </div>

                                        <div className="mt-4">
                                            <Label forInput="email" value="Description"/>

                                            <textarea name="" id=""
                                                      className={
                                                          `border-gray-300 w-full focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm `
                                                      }
                                                      disabled
                                                      defaultValue={props.activePackage.description}
                                                      rows="10">
                                    </textarea>
                                        </div>
                                    </div>

                                </div>
                            </form>
                        </div>
                    ) : (
                        ''
                    )
                }
            </div>
        </Authenticated>
    );
}

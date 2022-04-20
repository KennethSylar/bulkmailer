import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import Button from "@/Components/Button";

export default function Account(props) {

    const { data, setData, post, processing, user, errors, reset } = useForm({
        name: props.user.name,
        lastname: props.user.lastname,
        email: props.user.email,
        password: '',
        password_confirmation: '',
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('update-profile'));
    };
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Manage Account</h2>}
        >
            <Head title="Account" />

            <div className="py-12 px-2">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <ValidationErrors errors={errors} />
                            <form onSubmit={submit}>
                                <h4>Personal Information</h4>
                                <div>
                                    <Label forInput="name" value="Name" />

                                    <Input
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        className="mt-1 block w-full"
                                        autoComplete="name"
                                        isFocused={true}
                                        handleChange={onHandleChange}
                                        required
                                    />
                                </div>
                                <div className="mt-2">
                                    <Label forInput="lastname" value="Lastname" />

                                    <Input
                                        type="text"
                                        name="lastname"
                                        value={data.lastname}
                                        className="mt-1 block w-full"
                                        autoComplete="lastname"
                                        isFocused={true}
                                        handleChange={onHandleChange}
                                        required
                                    />
                                </div>

                                <div className="mt-4">
                                    <Label forInput="email" value="Email" />

                                    <Input
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        className="mt-1 block w-full"
                                        autoComplete="username"
                                        handleChange={onHandleChange}
                                        required
                                    />
                                </div>

                                <div className="flex items-center justify-end mt-4">
                                    <Button className="ml-4" processing={processing}>
                                        Update profile
                                    </Button>
                                </div>

                            </form>
                        </div>
                    </div>

                    <div className="bg-white mt-4 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <h4>Subscriptions</h4>
                            {
                                props.package !== null ? (
                                    <div>
                                        <div>
                                            <Label forInput="name" value="Name" />

                                            <Input
                                                type="text"
                                                name="name"
                                                value={props.package.name}
                                                className="mt-1 block w-full"
                                                autoComplete="name"
                                                handleChange={onHandleChange}
                                                required
                                                disabled
                                            />
                                        </div>
                                        <div className="mt-2">
                                            <Label forInput="description" value="Description" />

                                            <Input
                                                type="text"
                                                name="description"
                                                value={props.package.description}
                                                className="mt-1 block w-full"
                                                autoComplete="description"
                                                handleChange={onHandleChange}
                                                required
                                                disabled
                                            />
                                        </div>
                                        <div className="mt-2">
                                            <Label forInput="email_count" value="Total subscription emails" />

                                            <Input
                                                type="text"
                                                name="email_count"
                                                value={props.package.email_count}
                                                className="mt-1 block w-full"
                                                autoComplete="email_count"
                                                handleChange={onHandleChange}
                                                required
                                                disabled
                                            />
                                        </div>
                                    </div>

                                ): (
                                        'No Active Subscription'
                                    )
                            }
                        </div>
                    </div>
                    <div className="bg-white mt-4 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <h4>User Domain</h4>
                                <div>
                                    <div className="mt-2">
                                        <Label forInput="name" value="Domain url" />

                                        <Input
                                            type="text"
                                            name="name"
                                            value={props.package.name}
                                            className="mt-1 block w-full"
                                            autoComplete="name"
                                            handleChange={onHandleChange}
                                            required
                                            disabled
                                        />
                                    </div>
                                    <div className="mt-2">
                                        <Label forInput="name" value="Admin Email Account" />

                                        <Input
                                            type="email"
                                            name="name"
                                            value={props.package.name}
                                            className="mt-1 block w-full"
                                            autoComplete="name"
                                            handleChange={onHandleChange}
                                            required
                                            disabled
                                        />
                                    </div>

                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}

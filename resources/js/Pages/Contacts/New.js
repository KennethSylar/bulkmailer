import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import {Head, useForm} from '@inertiajs/inertia-react';
import Label from "@/Components/Label";
import Input from "@/Components/Input";
import Button from "@/Components/Button";

export default function New(props) {

        const { data, setData, post, processing, user, errors, reset } = useForm({
            name: '',
            file: '',
            description: '',
        });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };
    const  onFileChange = (event) => {
        // Update the state
        console.log(event.target.files[0])
        setData( event.target.name, event.target.files[0]);
    };
    // const onHandleFile = (event) => {
    //     setData(event.target.file);
    // };
    const submit = (e) => {
        e.preventDefault();

        post(route('create-contact-list'));
    };
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Upload Contact List</h2>}
        >
            <Head title="New Template" />

            <div className="py-12 px-2">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <form onSubmit={submit} encType="multipart/form-data">
                             <div className="p-6 bg-white border-b border-gray-200">
                            <div>
                                <div>
                                    <Label forInput="name" value="Contact List Name" />

                                    <Input
                                        type="text"
                                        name="name"
                                        // value={data.name}
                                        className="mt-1 block w-full"
                                        autoComplete="name"
                                        handleChange={onHandleChange}
                                        required
                                        disabled
                                    />
                                </div>
                                <div className="mt-4">
                                    <Label forInput="name" value="Upload Contact List (CSV Format)" />

                                    <Input
                                        type="file"
                                        name="file"
                                        // value={data.file}
                                        className="mt-1 block w-full"
                                        // autoComplete="name"
                                        handleChange={onFileChange}
                                        // required
                                        // disabled
                                    />
                                </div>
                                <div className="mt-4">
                                    <Label forInput="email" value="Description"/>

                                    <textarea name="description" id=""
                                              className={
                                                  `border-gray-300 w-full focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm `
                                              }
                                              onChange={onHandleChange}
                                              // value={data.description}
                                              rows="10">
                                        </textarea>
                                </div>
                                <div className="flex items-center justify-end mt-4">
                                    <Button className="ml-4" processing={processing}>
                                        Create
                                    </Button>
                                </div>

                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}

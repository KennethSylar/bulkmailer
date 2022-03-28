import React, {useState} from 'react';
import Authenticated from '@/Layouts/Authenticated';
import {Head, Link, useForm} from '@inertiajs/inertia-react';
import ValidationErrors from "@/Components/ValidationErrors";
import Label from "@/Components/Label";
import Input from "@/Components/Input";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Button from "@/Components/Button";

export default function New(props) {

    const { data, setData, post, processing, errors, reset } = useForm({
        template: '',
        date: '',
        time: '',
        contact_list: '',
    });

    const {startDate, setStartDate} = useState(
    //     setHours(setMinutes(new Date(), 0), 9)
    );
    const filterPassedTime = (time) => {
        const currentDate = new Date();
        const selectedDate = new Date(time);

        return currentDate.getTime() < selectedDate.getTime();
    };

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('create-campaign'));
    };
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">New Campaign details</h2>}
        >
            <Head title="New Campaign" />

            <div className="py-12 px-2">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <ValidationErrors errors={errors}/>
                        <form onSubmit={submit}>
                            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg"   >

                                <div className="p-6 bg-white border-b border-gray-200">
                                    <div>
                                        <Label forInput="name" value="Select campaign template"/>

                                        <select
                                            className="mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                            name="template"
                                            onChange={onHandleChange}
                                            value={data.template}
                                            id="package">
                                            {
                                                props.templates.map((template, i) =>{
                                                    return(
                                                        <option key={i} value={template.id}>{template.name}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="h-80">
                                        <h4 className="text-center p-2">Template preview here</h4>

                                    </div>
                                    <div>
                                        <Label forInput="price" value="Campaign Date"/>

                                        <div className="grid grid-cols-2 gap-4">
                                            <Input
                                                type="date"
                                                name="date"
                                                className="mt-1 block w-full"
                                                autoComplete="lastname"
                                                isFocused={false}
                                                disabled
                                                handleChange={onHandleChange}
                                                required
                                            />
                                            <Input
                                                type="time"
                                                name="time"
                                                className="mt-1 block w-full"
                                                autoComplete="lastname"
                                                isFocused={false}
                                                disabled
                                                handleChange={onHandleChange}
                                                required
                                            />
                                        </div>
                                        {/*<DatePicker*/}
                                        {/*    className="mt-1 block w-full"*/}
                                        {/*    selected={startDate}*/}
                                        {/*    showTimeSelect*/}
                                        {/*    filterTime={filterPassedTime}*/}
                                        {/*    dateFormat="MMMM d, yyyy h:mm aa"*/}
                                        {/*/>*/}
                                    </div>
                                    <div>
                                        <Label forInput="count" value="Contact List"/>

                                        <select
                                            className="mt-1 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                            name="contact_list"
                                            onChange={onHandleChange}
                                            value={data.contact_list}
                                            required="required"
                                            id="package">
                                            <option>Select Contact List</option>
                                            {
                                                props.contact_list.map((c_list, i) =>{
                                                    return(
                                                        <option key={i} value={c_list.id}>{c_list.name}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>

                                    <div className="mt-4">
                                        <Label forInput="email" value="Description"/>

                                        <textarea name="" id=""
                                                  className={
                                                      `border-gray-300 w-full focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm `
                                                  }
                                                  disabled
                                                  // defaultValue={props.activePackage.description}
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

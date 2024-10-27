import { Form, redirect, useLoaderData, useNavigate } from 'react-router-dom';

import { updateContact } from "../contacts";


export async function actionEdit({ request, params }) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    await updateContact(params.contactId, updates);
    return redirect(`/contacts/${params.contactId}`);
}

export const Edit = () => {
    const contact = useLoaderData();
    const navigate = useNavigate();

    return (
        <>

            <div className="mt-10 sm:mt-0 p-10">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
                            <p className="mt-1 text-sm text-gray-600">Add Contacts only you know personally</p>
                        </div>
                    </div>
                    <div className="mt-5 md:col-span-2 md:mt-0">
                        <Form method="post" id="contact-form">
                            <div className="overflow-hidden shadow sm:rounded-md">
                                <div className="bg-white px-4 py-5 sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                               Name 
                                            </label>
                                            <input
                                                placeholder="Jhon"
                                                aria-label="First name"
                                                type="text"
                                                name="first"
                                                defaultValue={contact.first}
                                                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                Family Name
                                            </label>
                                            <input
                                                placeholder="Doe"
                                                aria-label="Last name"
                                                type="text"
                                                name="last"
                                                defaultValue={contact.last}
                                                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
                                        </div>

                                        <div className="col-span-6 sm:col-span-6">
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                                Phone no.
                                            </label>
                                            <input
                                                type="number"
                                                name="phone"
                                                placeholder="8786867785"
                                                defaultValue={contact.twitter}
                                                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
                                        </div>


                                        {/* <div className="col-span-6 sm:col-span-6">
                                            <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                                                Avatar
                                            </label>
                                            <div className="mt-1 flex rounded-md shadow-sm">
                                                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-sm text-gray-500">
                                                    https://
                                                </span>
                                                <input
                                                    placeholder="avatar.com/g/200/200"
                                                    aria-label="Avatar URL"
                                                    type="text"
                                                    name="avatar"
                                                    defaultValue={contact.avatar}
                                                    className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-none rounded-r-md sm:text-sm focus:ring-1" />
                                            </div>
                                        </div> */}

                                        <div className="col-span-6 sm:col-span-6">
                                            <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
                                                Note
                                            </label>
                                            <div className="mt-1">
                                                <textarea
                                                    name="notes"
                                                    defaultValue={contact.notes}
                                                    rows={3}
                                                    className="mt-1 px-3 py-2 resize-none bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                                                    placeholder=" description"
                                                />
                                            </div>
                                            <p className="mt-2 text-sm text-gray-500">
                                            A brief description of this profile
                                            </p>
                                        </div>

                                    </div>
                                </div>

                                <div className="flex flex-col gap-2 justify-end bg-gray-50 px-4 py-3 sm:px-6 sm:flex-row">

                                    <button
                                        type="button"
                                        onClick={() => {
                                            navigate(-1);
                                        }}
                                        className="inline-flex justify-center rounded-md border border-transparent bg-slate-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        type="submit"
                                        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        Save
                                    </button>

                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div >

        </>
    )
}

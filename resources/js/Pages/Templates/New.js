import React, {useRef} from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import EmailEditor from 'react-email-editor';


export default function New(props) {

        const emailEditorRef = useRef(null);

        const exportHtml = () => {
            emailEditorRef.current.editor.exportHtml((data) => {
                const { design, html } = data;
                console.log('exportHtml', html);
            });
        };

        const onLoad = () => {
            // editor instance is created
            // you can load your template here;
            // const templateJson = {};
            // emailEditorRef.current.editor.loadDesign(templateJson);
        }

        const onReady = () => {
            // editor is ready
            console.log('onReady');
        };
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">New Email Template</h2>}
        >
            <Head title="New Template" />

            <div className="py-12 px-2">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">

                            <EmailEditor ref={emailEditorRef} onLoad={onLoad} onReady={onReady} />
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}

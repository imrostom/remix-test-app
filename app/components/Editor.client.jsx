import { useEffect, useState } from "react";
import pk from "react-draft-wysiwyg";
const { Editor } = pk

import df from "draft-js";

const { EditorState, convertToRaw } = df


import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const TextEditor = () => {
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );

    const updateTextDescription = (state) => {
        setEditorState(state);
        const data = convertToRaw(editorState.getCurrentContent());

        console.log(data);
    };

    const [editor, setEditor] = useState(false)
    useEffect(() => {
        setEditor(true)
    })

    if(window !== undefined) {
        return (
            <>
                {editor && <Editor
                    editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={setEditorState}
                    toolbar={{
                        inline: { inDropdown: true },
                        list: { inDropdown: true },
                        textAlign: { inDropdown: true },
                        link: { inDropdown: true },
                        history: { inDropdown: true },
                      }}
                />
                }
            </>
        )
    }
    return null
}


export default TextEditor;
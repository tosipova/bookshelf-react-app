import React from 'react';

import '../editAuthor.css';

function EditAuthor(props) {
    const [name, setName] = React.useState("Pushkin");
    const [language, setLanguage] = React.useState("Russian");
    const [fields, setFields] = React.useState(["Kapitanskya Dochka"])

    React.useEffect(()=> {
        if (props.currentAuthor) { // if ([]) => true
            setName(props.currentAuthor.name)
            setLanguage(props.currentAuthor.language)
            setFields(props.currentAuthor.fields)
        }
    }, [props.currentAuthor])
    
    return (
        <form className="edit-form">

       {/* {
           props.currentAuthor && <button
               onClick={() => {
                   editCurrentAuthorOnServer()
                   setCurrentAuthor()
               }}
               type="button"
       
           >
                </button>
       } */}
            <button onClick={() => setFields([...fields, ""])}> + </button>
            <button 
                className="button-save" 
                onClick={() => props.addAuthor({
                                            name,
                                            language,
                                            fields,
                                        })}
            > 
                Save 
            </button>
            <button  onClick={() => props.editAuthor(name,language,fields)}> Edit </button>

            <label htmlFor="Author">
                Author
                <input
                    type="text"
                    name="Author"
                    value={name}
                    onChange={(event) => {
                        setName(event.target.value)
                    }}
                />
            </label>
            <label htmlFor="language">
                Language
            <input
                    type="text"
                    name="language"
                    value={language}
                    onChange={(event) => {
                        setLanguage(event.target.value)
                    }}
                />
            </label>

            {(fields || []).map((field, idx) => {

                return (
                    <label htmlFor="new book" key={idx}> New book
                    
                        <input
                            type="text"
                            value={field}
                            name={idx}
                            onChange={(event) => {
                                const myUpdatedFields = [...fields]
                                myUpdatedFields[idx] = event.target.value
                                setFields(myUpdatedFields)
                            }}
                        />
                    </label>
                )
            })

            }
            
            

        </form >
    );
}
export default EditAuthor;
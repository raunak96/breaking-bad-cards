import React from "react";
import { useState } from "react";

const SearchBox = ({handleSubmit}) => {
    const [text, setText] = useState("");

    const handleChange = (e)=>{
        setText(e.target.value);
        handleSubmit(e.target.value);
    }
    return (
        <section className="search">
            <form>
                <input
                    type="search"
                    className="form-control"
                    placeholder="Search Characters"
                    value={text}
                    autoFocus
                    onChange={handleChange}

                />
            </form>
        </section>
    );
};

export default SearchBox;

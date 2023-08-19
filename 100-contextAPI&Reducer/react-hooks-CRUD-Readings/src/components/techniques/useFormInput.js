import React, {useState} from "react";

/**
 * first one
 * @param type
 * @param initialValue
 * @returns {[unknown, *]}
 */

function useInputTwo({ type, initialValue ,/*...*/ }) {
    const [value, setValue] = useState(initialValue);

    const input = <input value={value} onChange={e => setValue(e.target.value)} type={type} />;

    return [value, input];
}

///////
/*
use in html, useInputTwo
*/
const [username, userInput] = useInputTwo({ type: "text" });
const [password, passwordInput] = useInputTwo({ type: "text" });

return <>
    {userInput} -> {username} <br />
    {passwordInput} -> {password}
</>;

/**
 * ///// 2 nd one
 * @param type
 * @param initialValue
 * @returns {[unknown, *]}
 */

function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    const handleChange = e => {
        setValue(e.target.value);
    };

    const handleReset = () => {
        setValue("");
    };

    return {
        value,
        onChange: handleChange,
        onReset: handleReset
    };
}

// const name = useFormInput("");


import {useState} from 'react';

function Checkbox({onChange}: {onChange: (e: React.ChangeEvent<HTMLInputElement>) => void}) {
    const [checked, setChecked] = useState(false);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.checked);
        setChecked(e.target.checked);
        onChange(e);
    };

    return (
        <div>
        <input
            type="checkbox"
            checked={checked}
            onChange={handleChange}
        />
        {/* <p>{checked ? "checked" : "not checked"}</p> */}
        </div>
    );
}

export default Checkbox;
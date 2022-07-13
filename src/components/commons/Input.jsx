export const Input = ({label, type, handleChange, placeholder, value}) => {
    return (
        <div className="form-group">
            <label className="capitalize px-0.5">{label}: </label>
            <input onChange={handleChange} value={value} name={label} className="input-control" type={type} placeholder={placeholder}/>
        </div>
    );
};



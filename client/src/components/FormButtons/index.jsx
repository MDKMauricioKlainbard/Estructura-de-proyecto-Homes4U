export default function FormButtons ({label, onClick}) {
    return (
        <button onClick = {onClick}>
            {label}
        </button>
    )
}

// <FormButtons label = "Mi perfil" onClick = {()=>{console.log('Mi perfil')}} 
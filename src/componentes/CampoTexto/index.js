import './CampoTexto.css';

const CampoTexto = (props) => {

    let valor = 'Douglas Miranda';

    const aoDigitado = (e) => {
        valor = e.target.value
        console.log(valor)
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
};

export default CampoTexto;
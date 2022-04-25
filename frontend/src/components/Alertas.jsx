

const Alertas = ({alerta}) => {
  return (
    <div className={` ${alerta.error ?  "mensaje-error": "mensaje-ok"  }`}>
        {alerta.msg}
    </div>
  )
}

export default Alertas
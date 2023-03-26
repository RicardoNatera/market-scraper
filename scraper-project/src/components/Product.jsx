
function Product({nombre,precio,link,imgLink}) {

    return (
    <div>
        <div style={{float: "left", width: "30%"}}>
            <img src={imgLink} style={{objectFit:"contain"}} alt={nombre}  />
        </div>
        <div style={{float: "left", width: "40%"}}>
            <h2>{nombre}</h2>
            <p>{precio}$</p>
        </div>
        <div style={{float: "right", width: "30%"}}>
            <a href={link} role="button">ir a web</a>
        </div>
    </div>
  )
}

export default Product
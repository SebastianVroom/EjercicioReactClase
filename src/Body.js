import React from "react";

class Body extends React.Component{
    constructor(props){
        super(props)
        this.state={
            nombres : ['Jose','Paco','Sebas','Sergio']}
        this.modtitulo = this.modtitulo.bind(this)
        this.addname = this.addname.bind(this)
    }

    render(){
        const nom = this.state.nombres.map((el,index)=>{return <li key={index}>{el}</li>})
        return<div><ul>{nom}</ul>
        <button onClick={this.modtitulo}>Cambia Titulo</button>
        <button onClick={this.addname}>Añade nombre</button>
        </div>
    }

    modtitulo(){
        this.props.modtit()
    }
    addname(){
        let resul = this.state.nombres
        resul.push('Joselito')
        this.setState({nombres:resul})
    }
}
export default Body
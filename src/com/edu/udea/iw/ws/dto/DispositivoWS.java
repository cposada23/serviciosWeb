package com.edu.udea.iw.ws.dto;

import javax.xml.bind.annotation.XmlRootElement;

/**
 * 
 * @author Camilo Posada Angel - cposadaa@gmail.com
 * Clase para mapear la informacion importante con respecto a los dispositivos 
 *
 */

@XmlRootElement
public class DispositivoWS {
	
	private String descripcion; //Descripcion del dispositivo( cantidad de ram, disco duro... etc)
	private String tipo; //Tipo del dispositivo( portatil, microscopio ...etc)
	private int codigo;
	
	public DispositivoWS(){}
	public DispositivoWS(String descripcion, String tipo, int codigo) {
		super();
		this.descripcion = descripcion;
		this.tipo = tipo;
		this.codigo = codigo;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	public String getTipo() {
		return tipo;
	}
	public void setTipo(String tipo) {
		this.tipo = tipo;
	}
	public int getCodigo() {
		return codigo;
	}
	public void setCodigo(int codigo) {
		this.codigo = codigo;
	}
	

}

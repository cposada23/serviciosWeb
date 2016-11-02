package com.edu.udea.iw.ws.dto;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class InvestigadorWS {
	private String nombres;
	private String cedula;
	private String apellidos;
	private String email;
	public String getNombres() {
		return nombres;
	}
	public void setNombres(String nombres) {
		this.nombres = nombres;
	}
	public String getCedula() {
		return cedula;
	}
	public void setCedula(String cedula) {
		this.cedula = cedula;
	}
	public String getApellidos() {
		return apellidos;
	}
	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	
}

package com.edu.udea.iw.ws.dto;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class UsuarioWs {
	private String nombres;
	private String cedula;
	private String apellidos;
	private String email;
	private String rol;
	
	public UsuarioWs(){}
	
	
	
	public UsuarioWs(String nombres, String cedula, String apellidos, String email, String rol) {
		super();
		this.nombres = nombres;
		this.cedula = cedula;
		this.apellidos = apellidos;
		this.email = email;
		this.rol = rol;
	}



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
	public String getRol() {
		return rol;
	}
	public void setRol(String rol) {
		this.rol = rol;
	}
	
	
	
	
}	

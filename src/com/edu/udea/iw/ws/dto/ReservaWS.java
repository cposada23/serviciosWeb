package com.edu.udea.iw.ws.dto;

import java.util.Date;

import javax.xml.bind.annotation.XmlRootElement;

/**
 * 
 * @author Camilo Posada Angel -- cposadaa@gmail.com
 *
 */
@XmlRootElement
public class ReservaWS {

	private int codigo;
	private Date FechaReserva;
	private Date vence;
	private DispositivoWS dispositivo;
	private boolean aprobado;
	private UsuarioWs usuario;
	
	public ReservaWS(){}
	
	public ReservaWS(int codigo, Date fechaReserva, Date vence, DispositivoWS dispositivo, boolean aprobado,
			UsuarioWs usuario) {
		super();
		this.codigo = codigo;
		FechaReserva = fechaReserva;
		this.vence = vence;
		this.dispositivo = dispositivo;
		this.aprobado = aprobado;
		this.usuario = usuario;
	}

	public UsuarioWs getUsuario() {
		return usuario;
	}
	public void setUsuario(UsuarioWs usuario) {
		this.usuario = usuario;
	}
	public Date getFechaReserva() {
		return FechaReserva;
	}
	public void setFechaReserva(Date fechaReserva) {
		FechaReserva = fechaReserva;
	}
	public Date getVence() {
		return vence;
	}
	public void setVence(Date vence) {
		this.vence = vence;
	}
	public DispositivoWS getDispositivo() {
		return dispositivo;
	}
	public void setDispositivo(DispositivoWS dispositivo) {
		this.dispositivo = dispositivo;
	}
	public boolean isAprobado() {
		return aprobado;
	}
	public void setAprobado(boolean aprobado) {
		this.aprobado = aprobado;
	}	
	
	public int getCodigo() {
		return codigo;
	}
	public void setCodigo(int codigo) {
		this.codigo = codigo;
	}
	
	
}

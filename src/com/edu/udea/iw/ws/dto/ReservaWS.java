package com.edu.udea.iw.ws.dto;

import java.util.Date;

import javax.xml.bind.annotation.XmlRootElement;

import com.edu.udea.iw.dto.Dispositivo;
import com.edu.udea.iw.dto.Usuario;

/**
 * 
 * @author Camilo Posada Angel -- cposadaa@gmail.com
 *
 */
@XmlRootElement
public class ReservaWS {


	private Date FechaReserva;
	private Date vence;
	private Dispositivo dispositivo;
	private boolean aprobado;
	
	
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
	public Dispositivo getDispositivo() {
		return dispositivo;
	}
	public void setDispositivo(Dispositivo dispositivo) {
		this.dispositivo = dispositivo;
	}
	public boolean isAprobado() {
		return aprobado;
	}
	public void setAprobado(boolean aprobado) {
		this.aprobado = aprobado;
	}	
	
	
}

package com.edu.udea.iw.ws.dto;

import java.util.Date;

import javax.xml.bind.annotation.XmlRootElement;

import com.edu.udea.iw.dto.Dispositivo;


/**
 * 
 * @author Camilo Posada Angel -- cposadaa@gmail.com
 *
 */
@XmlRootElement
public class PrestamoWS {
	private int codigo;
	//private Dispositivo dispositivo;
	private DispositivoWS dispositivoWS;
	private Date fechaInicio;
	private Date fechaFin;
	
	
	public PrestamoWS(){}
	
	
	
	public PrestamoWS(int codigo, DispositivoWS dispositivoWS, Date fechaInicio, Date fechaFin) {
		super();
		this.codigo = codigo;
		this.dispositivoWS = dispositivoWS;
		this.fechaInicio = fechaInicio;
		this.fechaFin = fechaFin;
	}



	public int getCodigo() {
		return codigo;
	}
	public void setCodigo(int codigo) {
		this.codigo = codigo;
	}
	
	public DispositivoWS getDispositivoWS() {
		return dispositivoWS;
	}

	public void setDispositivoWS(DispositivoWS dispositivoWS) {
		this.dispositivoWS = dispositivoWS;
	}

	public Date getFechaInicio() {
		return fechaInicio;
	}
	public void setFechaInicio(Date fechaInicio) {
		this.fechaInicio = fechaInicio;
	}
	public Date getFechaFin() {
		return fechaFin;
	}
	public void setFechaFin(Date fechaFin) {
		this.fechaFin = fechaFin;
	}
	
	
	
}

package com.edu.udea.iw.ws;

import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.QueryParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.edu.udea.iw.dao.ReservaDao;
import com.edu.udea.iw.dto.Reserva;
import com.edu.udea.iw.exeption.MyDaoExeption;
import com.edu.udea.iw.logicaNegocio.ReservaBL;

/**
 * Clase para el manejo de servicios web concernientes a las reservas
 * @author Andersson Villa
 *
 */

@Path("ServicioReserva")
@Component
public class ServicioReserva {
	@Autowired
	ReservaBL reservaBL;
	@Autowired
	ReservaDao reservaDao;

	public ReservaBL getReservaBL() {
		return reservaBL;
	}

	public void setReservaBL(ReservaBL reservaBL) {
		this.reservaBL = reservaBL;
	}
	
	@POST
	@Path("CrearReserva")
	public void crearReserva(@QueryParam("usuarioReserva")String usuarioReserva, @QueryParam("dispositivo")int dispositivo) throws MyDaoExeption{
		try{
			reservaBL.realizarReserva(usuarioReserva, dispositivo);
		}catch (Exception e) {
			throw new MyDaoExeption("No se pudo hacer la reserva",null);
		}
	}
	
	
	@POST
	@Path("AprobarReserva")
	public void aprobarReserva(@QueryParam("usuarioAprueba")String usuarioAprueba, @QueryParam("reserva")int codigoReserva) throws MyDaoExeption{
		try{
			Reserva reserva = reservaDao.obtenerReserva(codigoReserva);
			reservaBL.aprobarReserva(usuarioAprueba, reserva);
		}catch (Exception e) {
			throw new MyDaoExeption("No se pudo aprobar la reserva", null);
		}
	}

}

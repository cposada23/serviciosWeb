package com.edu.udea.iw.ws;

import java.rmi.RemoteException;
import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.edu.udea.iw.dto.Prestamo;
import com.edu.udea.iw.exeption.MyDaoExeption;
import com.edu.udea.iw.logicaNegocio.PrestamoBL;
import com.edu.udea.iw.ws.dto.DispositivoWS;
import com.edu.udea.iw.ws.dto.PrestamoWS;

/**
 * Clase para el manejo de servicios web concernientes a los Prestamos
 * @author Andersson Villa
 *
 */

@Path("ServicioPrestamo")
@Component
public class ServicioPrestamo {
	@Autowired
	PrestamoBL prestamoBL;

	public PrestamoBL getPrestamoBL() {
		return prestamoBL;
	}

	public void setPrestamoBL(PrestamoBL prestamoBL) {
		this.prestamoBL = prestamoBL;
	}
	
/**
 * Metodo para generar un prestamo
 * @param usuarioPresta   cedula del usuario que va  aprestar el dispositivo
 * @param usuarioAprueba 	cedula del admin que aprueba el prestamo
 * @param dispositivo	dispositivo que se va a prestar
 * @throws MyDaoExeption
 */
	
	@POST
	@Path("CrearPrestamo")
	public void crearPrestamo(@QueryParam("usuarioPresta")String usuarioPresta,@QueryParam("usuarioAprueba")String usuarioAprueba,@QueryParam("dispositivo")int dispositivo) throws MyDaoExeption{
			
		try{
			prestamoBL.crearPrestamo(usuarioPresta, usuarioAprueba, dispositivo);
		}catch (MyDaoExeption e) {
			throw new MyDaoExeption("Error guardando el prestamo", null);	
		}
	}
	
	/**
	 * Lista de Prestamos realizada por un usuario
	 * @param usuarioPresta  	cedula del usuario que presta
	 * @return
	 * @throws MyDaoExeption En caso tal de que el usuario nunca haya prestado un dispositivo
	 */
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("BuscarPrestamos")
	public List<PrestamoWS> buscarPrestamos(@QueryParam("usuarioPresta")String usuarioPresta) throws MyDaoExeption{
		List<Prestamo> listaPrestamo = null;
		List<PrestamoWS> resultado = new ArrayList<>();
		PrestamoWS prestamoWS;
		DispositivoWS dispositivoWS;
		try{
			listaPrestamo= prestamoBL.buscarPrestamos(usuarioPresta);
			for(Prestamo prestamo: listaPrestamo){
				dispositivoWS = new DispositivoWS(prestamo.getDispositivo().getDescripcion(), prestamo.getDispositivo().getTipo().getNombre(), prestamo.getDispositivo().getCodigo(), prestamo.getDispositivo().isEstado());
				prestamoWS = new PrestamoWS(prestamo.getCodigo(), dispositivoWS, prestamo.getFechaInicio(), prestamo.getFechaFin());
				resultado.add(prestamoWS);
			}
		}catch (MyDaoExeption e) {
			throw new MyDaoExeption("Prestamos no encontrados", null);
		}
		return resultado;
	}
	

}

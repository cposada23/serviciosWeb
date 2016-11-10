package com.edu.udea.iw.ws;

import java.rmi.RemoteException;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.edu.udea.iw.dao.DispositivoDao;
import com.edu.udea.iw.dto.Dispositivo;
import com.edu.udea.iw.exeption.MyDaoExeption;
import com.edu.udea.iw.logicaNegocio.DispositivoBL;


/**
 * Clase para el manejo de servicios web para los dispositivos
 * @author Alejandro Castañeda
 *
 */


@Path("ServicioDispositivo")
@Component
public class ServicioDispositivo {
	
	@Autowired
	DispositivoBL dispositivoBL;
	@Autowired
	DispositivoDao dispositivoDao;

	public DispositivoBL getDispositivoBL() {
		return dispositivoBL;
	}

	public void setDispositivoBL(DispositivoBL dispositivoBL) {
		this.dispositivoBL = dispositivoBL;
	}
	
	/**
	 * Metodo para crear un nuevo dispositivo
	 * @param codigo   codigo del dispositivo que se va a crear
	 * @param descripcion 	descripcion del dispositivo que se va a crear
	 * @param usuarioCrea	cedula del usuario que va a crear el dispositivo 
	 * @param tipo 	tipo de dispositivo que se va a crear
	 * @throws MyDaoExeption
	 */
	@POST
	@Path("CrearDispositivo")
	public void crearDispositivo(@QueryParam("codigo")int codigo,@QueryParam("descripcion")String descripcion,@QueryParam("usuarioCrea")String usuarioCrea,@QueryParam("tipo")String tipo) throws MyDaoExeption{
			
		try{
			dispositivoBL.crearDispositivo(codigo, descripcion, usuarioCrea, tipo);
		}catch (MyDaoExeption e) {
			throw new MyDaoExeption("Error creando el dispositivo", null);	
		}
	}
	
	
	/**
	 * Metodo que actualiza los datos de un dispositivo
	 * @param usuarioActualiza
	 * @param codigoDispositivo codigo para buscar el dispositivo dentro de la base de datos
	 * @throws MyDaoExeption
	 */
	@POST
	@Path("ActualizarDatosDispositivo")
	public void actualizarDispositivo(@QueryParam("usuarioActualiza")String usuarioActualiza,@QueryParam("dispositivo")int codigoDispositivo) throws MyDaoExeption{
			
		try{
			Dispositivo dispositivo = dispositivoDao.obtenerPorCodigo(codigoDispositivo);
			dispositivoBL.actualizarDatos(usuarioActualiza, dispositivo);
		}catch (MyDaoExeption e) {
			throw new MyDaoExeption("Error al momento de actualizar los datos del dispositivo", null);	
		}
	}	
	
	
	/**
	 * Actualiza la disponibilidad de un dispositivo cuando este es devuelto
	 * @param usuarioActualiza
	 * @param codigoDispositivo codigo para buscar el dispositivo dentro de la base de datos
	 * @throws MyDaoExeption
	 */
	@POST
	@Path("ActualizarDispoDispositivo")
	public void actualizarDisponibilidad(@QueryParam("usuarioActualiza")String usuarioActualiza,@QueryParam("dispositivo")int codigoDispositivo) throws MyDaoExeption{
			
		try{
			Dispositivo dispositivo = dispositivoDao.obtenerPorCodigo(codigoDispositivo);
			dispositivoBL.actualizarDisponibilidad(usuarioActualiza, dispositivo);
		}catch (MyDaoExeption e) {
			throw new MyDaoExeption("Error al momento de actualizar la disponibilidad del dispositivo", null);	
		}
	}	
	
	
	/**
	 * Actualiza el estado de eliminado de un dispositivo a true.
	 * @param usuarioElimina
	 * @param dispositivo
	 * @throws MyDaoExeption
	 */
	@POST
	@Path("EliminarDispositivo")
	public void eliminarDispositivo(@QueryParam("usuarioElimina")String usuarioElimina,@QueryParam("dispositivo")int codigoDispositivo) throws MyDaoExeption{
			
		try{
			Dispositivo dispositivo = dispositivoDao.obtenerPorCodigo(codigoDispositivo);
			dispositivoBL.eliminarDispositivo(usuarioElimina, dispositivo);
		}catch (MyDaoExeption e) {
			throw new MyDaoExeption("Error al momento de eliminar el dispositivo", null);	
		}
	}
	
	
	
	/**
	 * Busca dispositivos de la base de datos por medio de su codigo
	 * @param usuarioBusca
	 * @param codigo
	 * @return
	 * @throws MyDaoExeption
	 */
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("ListarDispositivo")
	public Dispositivo ListarDispositivo(@QueryParam("usuarioBusca")String usuarioBusca, @QueryParam("codigo")int codigo) throws MyDaoExeption{
		Dispositivo listaDispositivo = null;
		try{
			listaDispositivo = dispositivoBL.listarDispositivoPorCodigo(usuarioBusca, codigo);
		}catch (MyDaoExeption e) {
			throw new MyDaoExeption("Dispositivo no encontrado", null);
		}
		return listaDispositivo;
	}
	
	
	
	/**
	 * Servicio que retorna todos los dispositivos de la base de datos
	 * @return Lista de dispositivos 
	 * @throws RemoteException cuando no se encuentra ningun dispositivo
	 */
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("ListarDispositivos")
	public List<Dispositivo> listarDispositivos() throws RemoteException{
		List<Dispositivo> dispositivos = null;
		try {
			dispositivos = dispositivoBL.listarDispositivos("elver");
		} catch (MyDaoExeption e) {
			throw new RemoteException(e.getMessage(), e);
		}
		return dispositivos;
	}
	
	
	
	
}

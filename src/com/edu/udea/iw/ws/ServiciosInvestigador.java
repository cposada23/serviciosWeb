package com.edu.udea.iw.ws;

import java.rmi.RemoteException;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.edu.udea.iw.dto.Usuario;
import com.edu.udea.iw.exeption.MyDaoExeption;
import com.edu.udea.iw.logicaNegocio.UsuarioBL;
import com.edu.udea.iw.ws.dto.InvestigadorWS;

/**
 * Clase para el manejo de servicios web concernientes a los investigadores
 * @author Camilo Posada Angel -- cposadaa@gmail.com
 *
 */

@Path("ServicioInvestigador")
@Component
public class ServiciosInvestigador{
	
	@Autowired
	UsuarioBL usuarioBL;

	public UsuarioBL getUsuarioBL() {
		return usuarioBL;
	}

	public void setUsuarioBL(UsuarioBL usuarioBL) {
		this.usuarioBL = usuarioBL;
	}
	
	/**
	 * Metodo para el servicio web de obtener un usuario validando su login y contrasena
	 * @return JSON  con la informacion del nombre,apellid, email y cedula del usuario 
	 * @throws RemoteException en caso de que el usuario no se encuentre o la contraseña sea incorrecta
	 */
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("validar")
	public InvestigadorWS validarEmailContrasena(@QueryParam("email")String email , @QueryParam("contrasena")String contrasena) throws RemoteException{
		
		InvestigadorWS investigador = new InvestigadorWS();
		Usuario usuario = null;
		try {
			usuario = usuarioBL.validar(email, contrasena);
			investigador.setApellidos(usuario.getApellidos());
			investigador.setNombres(usuario.getNombres());
			investigador.setCedula(usuario.getCedula());
			investigador.setEmail(usuario.getEmail());
		} catch (MyDaoExeption e) {
			throw new RemoteException(e.getMessage(),e);
		}
		
		
		return investigador;
	}
	
	

}

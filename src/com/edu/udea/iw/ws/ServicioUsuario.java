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
import com.edu.udea.iw.ws.dto.UsuarioWs;

@Path("ServicioUsuarios")
@Component
public class ServicioUsuario {

	
	@Autowired
	UsuarioBL usuarioBL;

	public UsuarioBL getUsuarioBL() {
		return usuarioBL;
	}

	public void setUsuarioBL(UsuarioBL usuarioBL) {
		this.usuarioBL = usuarioBL;
	}
	
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("autenticar")
	public UsuarioWs autenticar(@QueryParam("email")String email , @QueryParam("contrasena")String contrasena) throws RemoteException{
		UsuarioWs usuario = null;
		Usuario u = null;
		try {
			u = usuarioBL.validar(email, contrasena);
			usuario = new UsuarioWs(u.getNombres(), u.getCedula(), u.getApellidos(), u.getEmail(), u.getRol().getCodigo());
		} catch (MyDaoExeption e) {
			throw new RemoteException(e.getMessage(),e);
		}
		return usuario;
	}	
}
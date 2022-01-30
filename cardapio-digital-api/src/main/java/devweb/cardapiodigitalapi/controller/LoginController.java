package devweb.cardapiodigitalapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import devweb.cardapiodigitalapi.dto.RoleDTO;
import devweb.cardapiodigitalapi.model.Usuario;
import devweb.cardapiodigitalapi.service.contract.UsuarioService;

@RestController
@RequestMapping("/login")
public class LoginController {
    
    @Autowired
    private UsuarioService usuarioService;

    @GetMapping
    public RoleDTO findUsuario(String user, String senha){

        Usuario usuario = usuarioService.findUser(user, senha);
        
        return new RoleDTO(usuario);
    }

}

package devweb.cardapiodigitalapi.service.contract;

import devweb.cardapiodigitalapi.model.Usuario;

public interface UsuarioService {

    Usuario findUser(String user, String senha);
    
}

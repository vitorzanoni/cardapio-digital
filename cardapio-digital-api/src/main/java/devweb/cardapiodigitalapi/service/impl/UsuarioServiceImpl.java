package devweb.cardapiodigitalapi.service.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import devweb.cardapiodigitalapi.exception.BusinessException;
import devweb.cardapiodigitalapi.model.Usuario;
import devweb.cardapiodigitalapi.repository.UsuarioRepository;
import devweb.cardapiodigitalapi.service.contract.UsuarioService;

@Service
public class UsuarioServiceImpl implements UsuarioService {

    @Autowired
    UsuarioRepository usuarioRepository;

    @Override
    public Usuario findUser(String user, String senha) {
        Optional<Usuario> usuario = usuarioRepository.findByUserAndSenha(user, senha);
        if (usuario.isPresent()) {
            return usuario.get();
        }

        throw new BusinessException("Usuário e/ou senha inválidos");
    }

}
